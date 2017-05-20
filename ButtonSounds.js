/**
 * Created by mika on 5/19/17.
 */
var json;
var dog;
var cat;
var elephant;
var pig;
var donkey;
var horse;

//gets all audio elements needed and sets the language when initializing the page
$(document).ready(function () {
    dog = $("#dogVoice")[0];
    cat = $("#catVoice")[0];
    elephant = $("#elephantVoice")[0];
    pig = $("#pigVoice")[0];
    donkey = $("#donkeyVoice")[0];
    horse = $("#horseVoice")[0];

    setVoiceLanguage();
});


//hooks the buttons up to play a sound on mouseover
$(".dogButton").mouseenter(function() {
    dog.play();
});


$(".catButton").mouseenter(function() {
    cat.play();
});


$(".elephantButton").mouseenter(function() {
    elephant.play();
});


$(".pigButton").mouseenter(function() {
    pig.play();
});


$(".donkeyButton").mouseenter(function() {
    donkey.play();
});


$(".horseButton").mouseenter(function() {
    horse.play();
});

var en ='{"dogSrc":"Dog.mp3","catSrc":"Cat.mp3","elephantSrc":"Elephant.mp3","pigSrc":"GuineaPig.mp3","horseSrc":"Horse.mp3","donkeySrc":"Donkey.mp3"}';
var se ='{"dogSrc":"Sounds/hund_dog.mp3","catSrc":"Sounds/katt_cat.mp3","elephantSrc":"Sounds/elefant_elephant.mp3","pigSrc":"Sounds/marsvin_guinea_pig.mp3","horseSrc":"Sounds/hast_horse.mp3","donkeySrc":"Sounds/asna_donkey.mp3"}';



function setVoiceLanguage() {
//if the current language is english we need to change it to swedish. Therefore the swedish lookup table is parsed and the current lang is set to swedish. Else the
//english table is parsed and the current language is set back to english
    if (localStorage.currentLang)
    {
        var lang = localStorage.currentLang
    }
    else { var lang = "en";}

    if (lang == "se") {
        json = JSON.parse(se);
    }
    else {
        json = JSON.parse(en);
    }

    //loops over every element that has the voiceSrc attribute sets and uses that to find the new source and set it. For this to work
    //the sorce property of an audio tag needs to have an id since that has to be changed, not the audio tag
    $('*').each(function() {
        if ($(this).attr('voiceSrc')) {

            var text = $(this).attr('voiceSrc');
            var newSrc = json[text];
            $(this).attr("src",newSrc);
        }
    });

    //unloads and reloads all existing audios so the new source takes effect
    if (typeof dog !== 'undefined') {
        dog.pause();
        dog.load();
    }

    if (typeof cat !== 'undefined') {
        cat.pause();
        cat.load();
    }

    if (typeof pig !== 'undefined') {
        pig.pause();
        pig.load();
    }

    if (typeof horse !== 'undefined') {
        horse.pause();
        horse.load();
    }

    if (typeof donkey !== 'undefined') {
        donkey.pause();
        donkey.load();
    }

    if (typeof elephant !== 'undefined') {
        elephant.pause();
        elephant.load();
    }

}
