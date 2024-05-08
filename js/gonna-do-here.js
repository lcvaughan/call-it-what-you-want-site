var regularFont;
var redpin;
var redcircle;
var redpinX = -50;
var redpinY= -50;
var squareState = 1;
//0 means off, 1 means on//

function preload() {
  regularFont = loadFont('img/Cairo-Regular.ttf');
  redpin = loadImage('img/pin.png');
  redcircle = loadImage('img/red-circle.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(regularFont);
  textSize(40);
}

function draw() {
  background(255);
  text('Well i’m just gonna do', width/5, height/6);
  text('What I gotta do', width/10, height/2);
  text('Cause I gotta keep myself \nfree', width/1.5, height/1.5);
  image(redcircle, width/20, height/1.8, width/3, height/5);
  
  text('here',redpinX,redpinY);
  image(redpin, redpinX+15, redpinY-260, width/9, height/4);
  if(squareState == 1) {
    noStroke();
    square(width/200,height/2.5,1700);
}
}
function mousePressed() {
  
  redpinX = mouseX;
  redpinY = mouseY;
  // text('here',mouseX,mouseY);
  // image(redpin, width/1.45, height/8, width/9, height/4);
  
  if(squareState == 1) {
    squareState = 0;
  } else {
    squareState = 0;
  }
}