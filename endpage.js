
var ctx = document.querySelector("canvas").getContext("2d"),
    dashLen = 220, dashOffset = dashLen, speed = 10,
    txt = "WELL DONE!", i = 0;
var x;
if($("body")[0].clientWidth == 768) {
    x = 20;
    console.log($("body"));
} else {
    x = 150;
    console.log("2");
    console.log($("body"));
}

ctx.font = "110px Comic Sans MS, cursive, TSCu_Comic, sans-serif";
ctx.lineWidth = 5; ctx.lineJoin = "round"; ctx.globalAlpha = 1;
ctx.strokeStyle = ctx.fillStyle = "#ff0066";

(function loop() {
    ctx.clearRect(x, 0, 60, 150);
    ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask to give illusion of drawing
    dashOffset -= speed;                                         // reduce dash length
    ctx.strokeText(txt[i], x, 90);                               // stroke letter

    if (dashOffset > 0) requestAnimationFrame(loop);             // animate
    else {
        ctx.fillText(txt[i], x, 90);                               // fill final letter
        dashOffset = dashLen;                                      // prep next char
        x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random(); //random letter spacing
        ctx.setTransform(1, 0, 0, 1, 0, 30 * Math.random());        // random y-delta
        ctx.rotate(Math.random() * 0.05);                         // random subtle rotation
        if (i < txt.length) requestAnimationFrame(loop);
    }
})();

// Code adapted from: http://stackoverflow.com/questions/29911143/how-can-i-animate-the-drawing-of-text-on-a-web-page