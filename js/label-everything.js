var regFont;
var exbFont;
var lock;
var label;
var mappedYPosition;

function preload() {
  regFont = loadFont('img/Cairo-Regular.ttf');
  lock = loadImage('img/lock.png');
  label = loadImage('img/label.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(regFont);
  textSize(40);
}

function draw() {
  background(255);
  text('Yeah were                                in ideas', width/6, height/5);
  text('We like to                                    everything', width/2.6,height/1.4);
  text('locked up',width/3.3,height/7);
  image(lock, width/3.5, height/4.5, width/8, height/4);
  image(label, width/2, height/1.5, width/7, height/8);
}