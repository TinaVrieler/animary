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

    var sound1 = document.getElementById("background_music2");
    var soundButton2 = document.getElementById("soundPuzzle");
    if (!sound1.muted) {
        sound1.muted = true;
        soundButton2.src = "Pictures/sound_off.png";
    } else {
        sound1.muted = false;
        soundButton2.src = "Pictures/sound_on.png";
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
