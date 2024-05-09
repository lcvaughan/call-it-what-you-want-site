var mic;
var funText;
var hand1;
var hand2;
var flameImg;
let cursorImg;

function preload() {
  funText = loadFont('Cairo-Regular.ttf');
  cursorImg = loadImage('mic.png');
  hand1 = loadImage('ftp-hand-1.png');
  hand2 = loadImage('ftp-hand-2.png');
  flameImg =loadImage('flame.png');
}

function setup() {
  createCanvas(700, 400);
  textFont(funText);
  textSize(20);
  noCursor();
}

function draw() {
  background(255);
  //image(cursorImg,width/10,height/2,width/10,height/3);//
  image(hand1,width/2.5,height/1.3,width/8,height/8);
  image(hand2,width/1.5,height/1.3,width/8,height/8);
  image(flameImg,width/1.95,height/2,width/6,height/3);
  text('You say,',width/8,height/5);
  text('"Now whats your style,',width/4,height/3);
  text('and who do you listen to?"',width/3,height/2.5);
  text('WHO CARES?',width/1.95,height/1.05);
  
  image(cursorImg, mouseX, mouseY, width/9,height/2);
}