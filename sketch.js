//Written by William Luk
// posts data to an Adafuit.io feed
let url = 'addYourAPIKey';

var data = 0;


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.mousePressed(on);
    canvas.mouseReleased(off);
}

function draw() {

}

function on() {
    background(252, 186, 3);

    textSize(100);
    textAlign(CENTER)
    text('😜  😂  😍', width / 2, height / 2 - 60);
    text('🌟  💫  🔥', width / 2, height / 2 + 140);


    ellipse(mouseX, mouseY, 40);
    ellipseMode(CENTER);
    noStroke();
    fill(78, 3, 252);


    data = 1;
    console.log(data);
    sendData(data);
}


function off() {
    background(78, 3, 252);


    textAlign(CENTER)

    textSize(30);


    textSize(100);
    text('😜  😂  😍', width / 2, height / 2 - 60);
    text('🌟  💫  🔥', width / 2, height / 2 + 140);
    //    noStroke();
    //    fill()
    //    ellipse(windowWidth / 2, windowHeight / 2, 400, 400);


    data = 179;
    console.log(data);
    sendData(data);
}

function sendData(turnOn) {
    let postData = {
        "value": turnOn,
        "X-AIO-Key": "enter your io key"
    };
    httpPost(url, 'json', postData, function (result) {
        console.log(result);
    });
}
