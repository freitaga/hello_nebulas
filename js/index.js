
// INIT
var DEBUG = false;

var NebPay = require("nebpay");     //https://github.com/nebulasio/nebPay
var nebPay = new NebPay();

var country_code;

//to check if the extension is installed
//if the extension is installed, var "webExtensionWallet" will be injected in to web page
if(typeof(webExtensionWallet) === "undefined"){
    //alert ("Extension wallet is not installed, please install it first.")
    $("#noExtension").removeClass("hide")
}else{
    $("#search_value").attr("disabled",false)
    $("#submit").attr("disabled",false)
}

var dappAddress = "n1vLDEfH3TD75RXXxhkJmnMX8zGx7waHe9a";
// above can probably be split into new js  script


function redirect(resp){
// redirect to guestbook.html
    console.log(resp)
}

// User clicks submit
document.getElementById("submit").onclick = function()
{
    
	


    var name = document.getElementById("name").value;
    var location = document.getElementById("location").value;
    var message = document.getElementById("message").value;

    console.log(name);
    console.log(location);
    console.log(message);

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
    

    callFunction = "iterate";
    callArgs = "[" + 20 + "," + 0 + "]";

    nebPay.simulateCall(to, value, callFunction, callArgs, {    
        callback: updateBook
    });
    

   

}