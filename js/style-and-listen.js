var mic;
var funText;
var hand1;
var hand2;
var flameImg;
let cursorImg;

function preload() {
  funText = loadFont('img/Cairo-Regular.ttf');
  cursorImg = loadImage('img/mic.png');
  hand1 = loadImage('img/ftp-hand-1.png');
  hand2 = loadImage('img/ftp-hand-2.png');
  flameImg =loadImage('img/flame.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(funText);
  textSize(40);
  noCursor();
}

function draw() {
  background(255);
  //image(cursorImg,width/10,height/2,width/10,height/3);//
  image(hand1,width/2.4,height/1.3,width/9,height/9);
  image(hand2,width/1.6,height/1.3,width/9,height/9);
  image(flameImg,width/1.93,height/1.7,width/9,height/4);
  text('You say,',width/6,height/5);
  text('"Now whats your style,',width/3,height/3);
  text('and who do you listen to?"',width/2.5,height/2.5);
  text('WHO CARES?',width/1.95,height/1.05);
  
  image(cursorImg, mouseX, mouseY, width/10,height/3);
}