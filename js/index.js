
// INIT
var DEBUG = false;

var NebPay = require("nebpay");     //https://github.com/nebulasio/nebPay
var nebPay = new NebPay();
var dappAddress = "n1grk1z5CUSjP3MFn5o3JwdhCJFM6VfAjiq";
// above can probably be split into new js  script

var country_code;

//to check if the extension is installed
//if the extension is installed, var "webExtensionWallet" will be injected in to web page
if(typeof(webExtensionWallet) === "undefined"){
    //alert ("Extension wallet is not installed, please install it first.")
    $("#noExtension").removeClass("hide")
} else {
    $("#search_value").attr("disabled",false)
    $("#submit").attr("disabled",false)
    refreshBook();
}

function redirect(resp){
// redirect to guestbook.html
    //console.log(resp)
    //AddNewEntry(resp);
}

// User clicks submit
document.getElementById("submit").onclick = function()
{

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
    var callFunction = "saveEntry";

    //call smart contract method in the form of ["args"]
    var callArgs = "[" + "\"" + name + "\", \"" + location + "\" , \"" + message + "\" ]";
    console.log(callArgs);

    nebPay.call(to, value, callFunction, callArgs, {    
        callback: redirect
	});

}

