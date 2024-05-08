var cFontRegular;
var blahText;
var problemsText;
var everythingX = -50;
var everythingY= -100;

function preload() {
  cFontRegular = loadFont('img/Cairo-Regular.ttf');
  blahText = loadImage('img/blah-text.png');
  problemsText = loadImage('img/problems-text.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(cFontRegular);
  textSize(40);
  background(255);
}

function draw() {
   noStroke()
  fill('black');
  text('youve taken          your words', width/5.5,height/5,width/2,height/6);
  
  text('and you take         your     ...',width/5.5,height/3.5,width/2,height/6);
  
  text('And stick them onto',width/2.6,height/1.35,width/4,height/4);
  //text('everything',width/2.35,height/1.2,width/4,height/3);//
  
  image(blahText,width/6,height/2.5,width/7,height/4);
  image(problemsText,width/1.7,height/3,width/5,height/4);
  
  fill(252,127,0);
  text('everything',width/2.35,height/1.25);
  fill(232,0,74);
  text('judgements',everythingX,everythingY)
  
  fill('white');
}

function mousePressed() {
  everythingX = mouseX;
  everythingY = mouseY;
}