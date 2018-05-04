"use strict";

var GuestBookEntry = function(entry) {
	if (entry) {
		var obj = JSON.parse(entry);
        this.address = obj.address
		this.guest = obj.guest;
        this.message = obj.message;
	} else {
        this.address = "";
	    this.guest = "";
	    this.message = "";
	}
};

GuestBookEntry.prototype = {
	toString: function () {
		return JSON.stringify(this);
	}
};

var GuestBook = function () {
    //store google maps place JSON here (lots of data, good to hide)
    LocalContractStorage.defineMapProperty(this, "repo", {
        parse: function (entry) {
            return new GuestBookEntry(entry);
        },
        stringify: function (o) {
            return o.toString();
        }
    });
};

GuestBook.prototype = {
    init: function () {
        // todo
    },

    save: function (guest, message) {

        guest = guest.trim();
        message = message.trim();
        if (guest === "" || message === ""){
            throw new Error("empty guest / message");
        }
        if (message.length > 512 || guest.length > 24){
            throw new Error("guest / message exceed limit length")
        }

        var from = Blockchain.transaction.from;
        var GuestBookEntry = this.repo.get(from);
        if (GuestBookEntry){
            throw new Error("Sorry, you have already created an entry in the Nebulas Guestbook, please leave room for others :)");
        }

        GuestBookEntry = new GuestBookEntry();
        GuestBookEntry.address = from;
        GuestBookEntry.guest = guest;
        GuestBookEntry.message = message;

        this.repo.put(guest, dictItem);
    },

    get: function (address) {
        address = address.trim();
        if ( address === "" ) {
            throw new Error("empty address")
        }
        return this.repo.get(address);
    }
};
module.exports = GuestBook;