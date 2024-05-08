var cairoReg;
var whiteCircle;
var knife;
var squareState = 1;

function preload() {
  cairoReg = loadFont('img/Cairo-Regular.ttf');
  whiteCircle = loadImage('img/white-circle-3.png');
  knife = loadImage('img/knife.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(cairoReg);
  textSize(40);
}

function draw() {
  background(255);
  stroke(51);
  image(whiteCircle,width/2,height/100,width/6.5,height/4);
  image(knife,width/1.8,height/2,width/7,height/3);
  rect(width/600,height/2.5,width/1,height/100);
  
  noStroke()
  text('We got nothing to lose',width/4,height/5);
  
  if(mouseX > 250 && mouseY > 0) {
    rect(590,160,130,50);
  }
  if(mouseX < 400 && mouseY > -100) {
    rect(1000,480,300,330);
  }

  text('You better run and hide', width/1.5, height/3.7);
  text('Yeah,\nyou crossed the line', width/9, height/2);
  text('I got a knife behind my back, just sayin',width/2, height/1.1);
  
  if(squareState == 1) {
    rect(width/600,height/2.9,width/2, height/1.5);
    rect(width/2, height/2.9, width/1.5, height/1.5);
  }
}

function mousePressed() {
  if(squareState == 0) {
    squareState = 1;
  } else {
    squareState = 0;
  }
}