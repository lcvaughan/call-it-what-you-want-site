var cFont;
var flameImage;
var ftpPerson;
var noConform;
var mappedXposition;

function preload() {
  cFont = loadFont('Cairo-Regular.ttf');
  flameImage = loadImage('flame.png');
  ftpPerson = loadImage('ftp-person.png');
  noConform = loadImage('no-conform.png');
  
}

function setup() {
  createCanvas(700, 400);
  textFont(cFont);
  textSize(20);
}

function draw() {
  background(255);
  text('If it dont conform',width/10,height/6);
  text('to what you were born into',width/3,height/4);
  text('Then you run',width/2.5,height/2);
  text('the other way',mappedXposition,height/1.3);
  image(flameImage, width/8, height/1.4, width/8, height/3);
  image(ftpPerson,width/2.4,height/1.9,width/9,height/5);
  image(noConform,width/4,height/5,width/15,height/9);
  mappedXposition = map(mouseX,0,width,160,450);
  noStroke()
  if(mouseX < 150 && mouseY > -100) {
    rect(100,50,375,100);
  }
  if(mouseX <250 && mouseY > -10) {
    rect(150,180,300,140);
  }
}