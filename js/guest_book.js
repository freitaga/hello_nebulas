function insertFlag(country_code) {
    return '<img id="flag" src="img/blank.gif" class="flag flag-' + country_code + '" alt="Czech Republic" />';
}

function updateBook(response) {
    console.log("Its time to party");
    //console.log(response);

    //var result = response.result;

    result = response.result;


    console.log(result);

    console.log(JSON.parse(result));

    var entries = JSON.parse(result);
    var entry;
    var entryList = [];

    for(var i = 0; i < entries.length; i++) {
        entry = entries[i].key;
        entryList.push(entry);

        if(entryList.length % 6 == 0){
            fillPage(entryList);
            entryList = [];
        }
        
    }

    console.log(entryList);

    if(entryList.length > 0) {
        console.log("filling last page with remaining entries");
        fillPage(entryList);
        entryList = [];
    }

    refresh();
}

function generateEntry(entry) {
    console.log("generating entry: " + entry);
    var entry = $( "<p/>").append( entry.name + " " + entry.location + " " + insertFlag(entry.location.toLowerCase()) + "<br>" + entry.message + "<br>" + entry.address);
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
        container.append(entry);
    }
    page.append(container);

    $("#pages").append(page);
}


function AddNewEntry(resp)
{
    console.log(resp);

    $( "#page1content" ).append( "<p>" + "AlexF" + " " + "Hello Nebulas!" + " " + "8s8fds9dfg8ghdfg89" + "</p>" );


    refresh();
   

    if(DEBUG){
    console.log("test");
    console.log(data);
    console.log(response);
}
    
    
    var to = dappAddress;
    var value = "0";
    var callFunction = "iterate";
    var callArgs = "[" + 20 + "," +  0 + "]"; //in the form of ["args"]
    console.log(callArgs);
    nebPay.simulateCall(to, value, callFunction, callArgs, {    
        callback: updateBook
    });

    refresh();

    if(DEBUG){
        console.log(data);
        console.log("test");
        console.log(response);
    }
}