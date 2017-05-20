//the photo starts to appwar as soon as the page is loaded
$(document).ready(function () {
    draw();
});

var amount = 1;
var canvas;
var ctx;
var img;
var drawFunct;

//Initializes canvas and context and then draws the picture to the canvas by calling the drawMore function in intervals of 0.09s
function draw() {
    img = document.getElementById("scribbleImg");
    canvas = document.getElementById("scribbleCanvas");
    ctx = canvas.getContext("2d");
    drawFunct = setInterval(drawMore, 90);
}

//first cleas the canvas, the n draws the image to it. the amount variable specifies how many rows of pixels are drawn.
//Each time the function is called a row is added
function drawMore() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, amount, 0, 0, canvas.width, amount);
    amount++;

    $(".addTo").removeClass("cursor");
    $(".underHeader").removeClass("underHeaderTutorial");
    $(".addTo").addClass("clear");
}

function pauseDraw() {
    $(".addTo").addClass("cursor");
    $(".underHeader").addClass("underHeaderTutorial");
    $(".addTo").removeClass("clear");

    clearInterval(drawFunct);

    setTimeout(function() {
        drawFunct = setInterval(drawMore, 90)
    }, 3000);
}