var entryIndex = 0;
var pageIndex = 0;

function insertFlag(country_code) {
    return '<img id="flag" src="img/blank.gif" class="flag flag-' + country_code + '"style="height:26px""  />';
}

function convertToCountry(country_code) {
    var json = {"BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", "BL": "Saint Barthelemy", "BM": "Bermuda", "BN": "Brunei", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BQ": "Bonaire, Saint Eustatius and Saba ", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "BZ": "Belize", "RU": "Russia", "RW": "Rwanda", "RS": "Serbia", "TL": "East Timor", "RE": "Reunion", "TM": "Turkmenistan", "TJ": "Tajikistan", "RO": "Romania", "TK": "Tokelau", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "PG": "Papua New Guinea", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", "EH": "Western Sahara", "EE": "Estonia", "EG": "Egypt", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "ET": "Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova", "MG": "Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory", "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands", "FM": "Micronesia", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "XK": "Kosovo", "CI": "Ivory Coast", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon", "CL": "Chile", "CC": "Cocos Islands", "CA": "Canada", "CG": "Republic of the Congo", "CF": "Central African Republic", "CD": "Democratic Republic of the Congo", "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CW": "Curacao", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syria", "SX": "Sint Maarten", "KG": "Kyrgyzstan", "KE": "Kenya", "SS": "South Sudan", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "South Korea", "SI": "Slovenia", "KP": "North Korea", "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "British Virgin Islands", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Laos", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "LV": "Latvia", "TO": "Tonga", "LT": "Lithuania", "LU": "Luxembourg", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libya", "VA": "Vatican", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "U.S. Virgin Islands", "IS": "Iceland", "IR": "Iran", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AQ": "Antarctica", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique"};
    return json[country_code];
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

        // if(entryList.length % 6 == 0){
        //     fillPage(entryList);
        //     entryList = [];
        // }
        
    }
    fillPages(entryList); // maybe return bool

    refresh();
}

function generateEntry(entry) {
    console.log("generating entry: " + entry);
    var entry = $( "<p id=entry" + entryIndex + "/>").append(  "<div class='entry-header'>" + "<b>" + entry.name + "</b> " + convertToCountry(entry.location) + " " + insertFlag(entry.location.toLowerCase()) + "</div>" + "<br>" + entry.message + "<br>" + "<div style='padding-top: 5px; color: #999'>" + entry.address + "</div>");
    return entry;
}

function generatePage() {
    var page = $("<section/>")
    return page;
}

function fillPages(entries) {
    var entry;
    var page = generatePage();
    var container = $("<div page" + pageIndex + "/>");
    var pageHeight = 0;

    page.append(container);
    $("#pages").append(page);
    
    //////new
    for(var i = 0; i < entries.length; i++) {
        entry = generateEntry(entries[i]);

        console.log("Page height is " + pageHeight);

        if(pageHeight > 750) {
            //make new page
            console.log("Making new page");
            pageIndex++;
            page = generatePage();
            container = $("<div page" + pageIndex + "/>");

            page.append(container);
            $("#pages").append(page);
            pageHeight = 0;

        }

        container.append(entry);
        console.log("searching for entry by id entry" + entryIndex);
        console.log($("#entry" + entryIndex).outerHeight());
        pageHeight += $("#entry" + entryIndex).outerHeight();
        entryIndex++;


        /*
        if((container.offsetHeight + entry.offsetHeight) < 730){
            container.append(entry);
            console.log("searching for entry by id entry" + entryIndex);
            console.log($("#entry" + (entryIndex - 1)).outerHeight());
        }
        else{
            pageIndex++;
            // complete current page
            page.append(container);
            $("#pages").append(page);

            //new page
            page = generatePage();
            container = $("<div page" + pageIndex + "/>");

            // start page with current entry
            container.append(entry);

        }*/

    }

// /// old
//     for(var i = 0; i < entries.length; i++) {
//         entry = generateEntry(entries[i]);
//         container.append(entry);
//     }
//     page.append(container);

//     $("#pages").append(page);
 }

function refreshBook() {
    var to = dappAddress;
    var value = "0";
    var callFunction = "getAll";
    var callArgs = "";

    nebPay.simulateCall(to, value, callFunction, callArgs, {    
        callback: updateBook
    });
    
}

document.getElementById("refresh").onclick = function() {
    refreshBook();
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

$(document).ready(refreshBook());