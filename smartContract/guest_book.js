'use strict';




var Entry = function(text) {

    if (text) {
        var o = JSON.parse(text);
        this.name = o.name;
        this.location= o.location;
        this.message = o.message;
    } else {
        this.name = "";
        this.location = "";
        this.message = "";
    }


};

Entry.prototype = {
    toString: function() {
        return JSON.stringify(this);
    }
};


var GuestBook = function() {
    LocalContractStorage.defineMapProperty(this, "test", {
        parse: function(text) {
            return new TestFunction(text);
        },
        stringify: function(o) {
            return o.toString();
        }
    });

    LocalContractStorage.defineMapProperty(this, "arrayMap");
    LocalContractStorage.defineMapProperty(this, "dataMap");
    LocalContractStorage.defineProperty(this, "size");

};

GuestBook.prototype = {
    init: function() {
        this.size = 0;
    },

    saveEntry : function(name, message) {
        name = name.trim();
        message = message.trim();

        // may cause deploy errors
        if(name == "" || message == ""){
        	throw new Error("empty Name / Message");
        }
        if(name.length > 24 || message.length > 512){
        	throw new Error("Name / Message exceed limit length");
        }

        var from = Blockchain.transaction.from;
        var entry = new Object();

        entry.name = name;
        entry.message = message;
        entry.location = from;

        var msg = JSON.stringify(entry);

        var entry = new entry(msg);

        var index = this.size;
        this.arrayMap.set(index, name);
        this.dataMap.set(name, entry);
        this.size += 1;
    },

    get: function(text2) {
        text2 = text2.trim();

        return this.dataMap.get(text2);
    },

    len: function() {
        return this.size;
    },

    // return all the entries
    iterate: function(limit, offset) {
        limit = parseInt(limit);
        offset = parseInt(offset);
        if (offset > this.size) {
            throw new Error("offset is not valid");
        }
        var number = offset + limit;
        if (number > this.size) {
            number = this.size;
        }
        var result = [];
        for (var i = offset; i < number; i++) {
            var key = this.arrayMap.get(i);
            var object = this.dataMap.get(key);
            var data = {
                key: object
            };
            result.push(data);
        }
        return result;
    },

    getAll: function() {
        var all = iterate(this.size, 0);

        return all;
    }

};

module.exports = GuestBook;
