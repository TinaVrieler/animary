var amount = 1;
var canvas;
var ctx;
var img;


function draw() {

            //ctx.drawImage(img, 10, 10);
        img = document.getElementById("scribbleImg");
        canvas = document.getElementById("scribbleCanvas");
        ctx = canvas.getContext("2d");
            setInterval(drawMore,90);
        }
       // setInterval(drawMore, 100);

       function drawMore() {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.drawImage(img,0,0,canvas.width,amount,0,0,canvas.width,amount);
            amount++;
        }
