/**
 * Created by tinavrieler on 2017-04-13.

 */


function audioControl() {
    var sound = document.getElementById("background_music");
    var soundButton = document.getElementById("sound"); 

    if (!sound.muted) {
        sound.muted = true;
        soundButton.src = "Pictures/sound_off.png";
    } else {
        sound.muted = false;
        soundButton.src = "Pictures/sound_on.png";
    }
}



function playButton() {
    var audio = document.getElementById('audio1');
    audio.play()
}




function audioPuzzle() {
    console.log("Button Clicked!");
    var song = document.getElementById("background_music2");
    if (song.pause == true) {
        console.log(1);
        song.play();
        document.getElementById("soundPuzzle").src = "Pictures/sound_on.png";
    } else {
        console.log(2);
        song.pause();
        document.getElementById("soundPuzzle").src = "Pictures/sound_off.png";
    }
}

function dogSound() {
    var dogSoundPlay = document.getElementById("audioDog");
    dogSoundPlay.play();
}

/*
 var soundButton = document.getElementById("soundButton");
 var isPlaying = false;

 function togglePLay(){
 if (isPlaying) {
 soundButton.pause();
 isPlaying = false;
 } else {
 soundButton.play();
 isPlaying = true;
 }
 }

 */
