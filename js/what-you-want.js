var fontReg;
var flamePerson;
var mappedXPosition;

function preload() {
  fontReg = loadFont('img/Cairo-Regular.ttf');
  flamePerson = loadImage('img/ftp-person.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(fontReg);
  textSize(40);
}

function draw() {
  background(255);
  text('Call it what you want,',width/8,height/4);
  text('Call it what you want,',width/8,height/3);
  text('I said just,',width/2,height/2);
  text('call it what you want',width/1.55,height/2);
  text('CALL iT WHAT YOU WANT',width/8,height/1.3);
  image(flamePerson,mappedXPosition,height/2.5,width/7,height/4);
  mappedXPosition = map(mouseX,0,width,50,650);
  noStroke()
  if(mouseX < 1400 && mouseY > -10) {
    rect(900,450,650,50);
  }
  if(mouseX < 1700 && mouseY > -10) {
    rect(220,700,450,50);
  }
}