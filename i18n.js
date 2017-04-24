
 //current language. Default is english
var json;

//String lookup tables in json format. Seperate key/value pairs with a comma
var english = '{"startText": "Start!","instructionText": "Click on any two puzzle pieces to swap their places"}'

var swedish = '{"startText": "Börja!","instructionText": "Clicka på två puzzelbitar för att få de att byta plats med varandra"}'

function changeLanguage() {
    var lang = localStorage.currentLang;
    if (lang == "en") {
        localStorage.currentLang = "se";
        
    }
    else { 
        localStorage.currentLang = "en";
        
    }
    setLanguage();

}

//called when the flag is clicked. Switches between swedish and english
function setLanguage() {

//if the current language is english we need to change it to swedish. Therefore the swedish lookup table is parsed and the current lang is set to swedish. Else the
//english table is parsed and the current language is set back to english
    var lang = localStorage.currentLang;

    if (lang == "se") {
        json = JSON.parse(swedish);
        document.getElementById("flag").src = "Pictures/english.png";
        
    }
    else { 
        json = JSON.parse(english);
        document.getElementById("flag").src = "Pictures/swedish.svg";
    }

//gets every element containg text via its ID and sets it with getting the string by key from whichever json table was parsed before
//be careful with the property you have to set. It might be innerHTML or value or something else
    document.getElementById("startText").innerHTML = json["startText"];
    document.getElementById("instructionText").innerHTML = json["instructionText"];

}

