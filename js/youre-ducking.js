var cairoFont;
var circledepth;
var squareState = 0;
//0 means off, 1 means on//
var mappedBackgroundColor;

function preload() {
   cairoFont = loadFont('img/Cairo-Regular.ttf');
   circledepth = loadImage('img/circle-2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(cairoFont);
  textSize(40);
}

function draw() {
  mappedBackgroundColor = map(mouseX,0,width,0,255)
  background(mappedBackgroundColor);
  fill(255);
  text('You’re ducking',width/2.5,height/6);
  text('and moving',width/2.3,height/3);
  fill(0,0,0);
  text('your bruises from all your enemies', width/3.2, height/1.2);
  text('just to \nHIDE', width/150, height/1.8);

}
