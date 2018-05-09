"use strict";

var Entry = function(entry) {
	if (entry) {
		var obj = JSON.parse(entry);
        this.address = obj.address
		this.x = obj.x;
        this.y = obj.y;
	} else {
        this.address = "";
	    this.x = "";
	    this.y = "";
	}
};

Entry.prototype = {
	toString: function () {
		return JSON.stringify(this);
	}
};

var Horse = function () {
    //store google maps place JSON here (lots of data, good to hide)
    LocalContractStorage.defineMapProperty(this, "repo", {
        parse: function (entry) {
            return new Entry(entry);
        },
        stringify: function (o) {
            return o.toString();
        }
    });
};

Horse.prototype = {
    init: function () {
        // todo
    },

    save: function (x, y) {

        x = x.trim();
        y = y.trim();
        if (x === "" || y === ""){
            throw new Error("empty x / y");
        }
        if (y.length > 512 || x.length > 24){
            throw new Error("x / y exceed limit length")
        }

        var from = Blockchain.transaction.from;
        var entry = this.repo.get(from);
        if (entry){
            throw new Error("One entry pls");
        }

        entry = new Entry();
        entry.address = from;
        entry.x = x;
        entry.y = y;

        this.repo.put(x, entry);
    },

    get: function (address) {
        address = address.trim();
        if ( address === "" ) {
            throw new Error("empty address")
        }
        return this.repo.get(address);
    }
};
module.exports = Horse;