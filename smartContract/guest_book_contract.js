'use strict';




var Entry = function(text) {

    if (text) {
        var o = JSON.parse(text);
        this.name = o.name;
        this.location= o.location;
        this.address = o.address;
        this.message = o.message;
    } else {
        this.name = "";
        this.location = "";
        this.address = "";
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

    saveEntry : function(name, location, message) {
        name = name.trim();
        location = location.trim();
        message = message.trim();

        // comments may cause deploy errors
        if(name == "" || message == ""){
        	throw new Error("empty Name / Message");
        }
        if(name.length > 24 || message.length > 512){
        	throw new Error("Name / Message exceed limit length");
        }

        var from = Blockchain.transaction.from;
        var entry = new Object();

        entry.name = name;
        entry.location = location;
        entry.address = from
        entry.message = message;

        

        var msg = JSON.stringify(entry);

        var entry = new entry(msg);

        var index = this.size;
        this.arrayMap.set(index, name);
        this.dataMap.set(name, entry);
        this.size += 1;
    },

    get: function(value) {
        value = value.trim();

        return this.dataMap.get(value);
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
        var all = this.iterate(this.size, 0);

        return all;
    }

};

module.exports = GuestBook;