
// INIT
var DEBUG = false;

var NebPay = require("nebpay");     //https://github.com/nebulasio/nebPay
var nebPay = new NebPay();

$("#search_value").attr("disabled",true)
$("#submit").attr("disabled",true)


//to check if the extension is installed
//if the extension is installed, var "webExtensionWallet" will be injected in to web page
if(typeof(webExtensionWallet) === "undefined"){
    //alert ("Extension wallet is not installed, please install it first.")
    $("#noExtension").removeClass("hide")
}else{
    $("#search_value").attr("disabled",false)
    $("#submit").attr("disabled",false)
}

var dappAddress = "n1rVfyDYFn4tEbTgp85nKxR5scoKJTyZ2pW";
// can probably split the above into its own script

function updateBook(response) {
	console.log("Its time to party");
	console.log(response);

    var result = response.result;

    console.log(result);

    console.log(JSON.parse(result));

    var entries = JSON.parse(result);
    var entry;
    var entryList = [];

    for(var i = 0; i < entries.length; i++) {
    	if(i % 3 == 0){
    		fillPage(entryList);
    		entryList = [];
		}
    	entry = entries[i].key;
    	entryList.push(entry);
    }

    refresh();
}

function generateEntry(entry) {
	console.log("generating entry: " + entry);
	var entry = $( "<p/>").append( entry.text1 + "<br>" + entry.text2 + "<br>" + entry.text3 );
	return entry;
}

function generatePage() {
	var page = $("<section/>")
	return page;
}

function fillPage(entries) {
	var entry;
	var page = generatePage();
	var container = $("<div/>");

	for(var i = 0; i < entries.length; i++) {
    	entry = generateEntry(entries[i]);
    	console.log(entry);
    	container.append(entry);
    	console.log(page);
    }
    page.append(container);

    $("#pages").append(page);
}


// User clicks submit
document.getElementById("submit").onclick = function()
{
    
	$( "#page1content" ).append( "<p>" + "AlexF" + " " + "Hello Nebulas!" + " " + "8s8fds9dfg8ghdfg89" + "</p>" );


    var name = document.getElementById("name").value;
    var location = document.getElementById("location").value;
    var message = document.getElementById("message").value;

	refresh();

    if(DEBUG){
        console.log(data);
        console.log("test");
        console.log(response);
    }

    // nebPay.js get results back from the smart contract
    // command: "save"
    // Summary: saves users entry and enters into the local storage
    // of the smart contract 
	var to = dappAddress;
    var value = "0";
    var callFunction = "keep";

     // call smart contract method in the form of ["args"]
    var callArgs = "[" + "\"" + name + "\", \"" + location + "\" , \"" + message + "\" ]";
    console.log(callArgs);
    nebPay.simulateCall(to, value, callFunction, callArgs, {    
        callback: updateBook
	});

    

   

}