var cairoFont;
var ratLadder;
var fakeSmile;
var yellowCircle2;
var blueCircle1;

function preload() {
  cairoFont = loadFont('img/Cairo-Regular.ttf');
  ratLadder = loadImage('img/rat-ladder.png');
  fakeSmile = loadImage('img/ftp-teeth.png');
  yellowCircle2 = loadImage('img/yellow-circle-2.png');
  blueCircle1 = loadImage('img/blue-circle-1.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(cairoFont);
  textSize(40);
}

function draw() {
  background(255);
  text('Well that',width/8,height/5);
  text('rat race ladder-climbing',width/1.8,height/4);
  text('fake-face smiles',width/1.8,height/2.5);
  text('got nothing on me',width/8,height/1.4);
  text('YEAH! YEAH!',width/1.55,height/1.1);
  image(ratLadder,width/7.5,height/4,width/10,height/2.5);
  image(fakeSmile,width/1.7,height/1.5,width/4.5,height/6);
  //image(yellowCircle2,width/1.2,height/7,width/3,height/2);//
}