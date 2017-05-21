var canvasContext;

$(document).ready(function () {
    create();
});

//initializes the canvas covering the photo and sets mouse events
function init(container, width, height, fillColor) {
//the create canvas method is called 
            var canvasRev = createCanvas(container, width, height);
            var ctxRev = canvasRev.context;
            canvasContext = ctxRev;

        //define a custom fillCircle() method for the context
            ctxRev.fillCircle = function(x, y, radius, fillColor) {
                this.fillStyle = fillColor;
                this.beginPath();
                this.moveTo(x, y);
                this.arc(x, y, radius, 0, Math.PI * 2, false);
                this.fill();
            };

        //function to simply fill the whole canvas with a color, in this case white
            ctxRev.clearTo = function(fillColor) {
                ctxRev.fillStyle = fillColor;
                ctxRev.fillRect(0, 0, width, height);
            };
            ctxRev.clearTo("#ddd");

            //sets mouse events for moving, clicking an releasing the mouse. We are only drawing (scratching) while the mouse is down 
            canvasRev.node.onmousemove = function(e) {
                if (!canvasRev.isDrawing) {
                    return;
                }
                var x = e.pageX - this.offsetLeft;
                var y = e.pageY - this.offsetTop;
                var radius = 25;
                var fillColor = '#b8b4a9';
//the globalCompositeOperation determines what happens when new shapes(the fillCircle method) are added to already existing content(fill color of the canvas)
//desintation-out means that the "exisiting content is kept where it does not overlapp the new shape" meaning: the new shape removes the old content,
//making it transparent
                ctxRev.globalCompositeOperation = 'destination-out';
                ctxRev.fillCircle(x, y, radius, fillColor);
            };
            canvasRev.node.onmousedown = function(e) {
                canvasRev.isDrawing = true;
            };
            canvasRev.node.onmouseup = function(e) {
                canvasRev.isDrawing = false;
            };
}

//fetches the container, a div with the photo set as backround and call the init function on it. This will create a filld canvas
//lying over the photo and hiding it. The size of the canvas is set here and should be the same as the photo
function create() {
            var container = document.getElementById('revealCanvas');
            init(container, 640, 480, '#ddd');;
}

//canvas is added to the parent, here the div containing the photo, to cover it up
function createCanvas(parent, width, height) {
            var canvas = {};
            canvas.node = document.createElement('canvas');
            canvas.context = canvas.node.getContext('2d');
            canvas.node.width = width || 100;
            canvas.node.height = height || 100;
            parent.appendChild(canvas.node);
            return canvas;
}


function tutorial() {
    simulateClick();
}

function simulateClick() {
    $("#cursor").addClass("cursor");

    var evt = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
        target: canvasContext,
        clientX: 4,
        clientY: 10
    });

    canvasContext.globalCompositeOperation = 'destination-out';

    simulateClickNDrag(evt, 0);
}

function simulateClickNDrag(event, offset) {
    if(offset < 351) {
        canvasContext.fillCircle(event.x + offset, event.y, 25, "#b8b4a9");
        setTimeout(function() { 
            simulateClickNDrag(event, (offset + 1)) 
        }, 25);
    }
    else {
        canvasContext.globalCompositeOperation = 'source-over';
        canvasContext.clearTo("#ddd" || "#ddd");
        $("#cursor").removeClass("cursor");
    }
}


