var cairoFont;
var ratLadder;
var fakeSmile;
var yellowCircle2;
var blueCircle1;

function preload() {
  cairoFont = loadFont('Cairo-Regular.ttf');
  ratLadder = loadImage('rat-ladder.png');
  fakeSmile = loadImage('ftp-teeth.png');
  yellowCircle2 = loadImage('yellow-circle-2.png');
  blueCircle1 = loadImage('blue-circle-1.png');
}

function setup() {
  createCanvas(700, 400);
  textFont(cairoFont);
  textSize(20);
}

function draw() {
  background(255);
  text('Well that',width/10,height/5);
  text('rat race ladder-climbing',width/1.8,height/4);
  text('fake-face smiles',width/1.8,height/2.5);
  text('got nothing on me',width/10,height/1.4);
  text('YEAH! YEAH!',width/4,height/1.2);
  image(ratLadder,width/3.5,height/7,width/10,height/2.5);
  image(fakeSmile,width/1.7,height/2,width/4.5,height/6);
  image(yellowCircle2,width/1.2,height/7,width/3,height/2);
}