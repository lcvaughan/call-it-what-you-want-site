var words = ["CALL", "iT,", "WHAT", "YOU", "WANT!"];
var wordIndex = 0;
var cFontBold;


function preload() {
  cFontBold = loadFont('Cairo-ExtraBold.ttf')
}

function setup() {
  createCanvas(700, 400);
  textAlign(CENTER);
  textSize(50);
  textFont(cFontBold);
}

function draw() {
  background('white');
  fill('black');
  text(words[wordIndex],width/2.2,height/2);
}

function mousePressed() {
  wordIndex = wordIndex + 1;
  if (wordIndex > 4) {
    wordIndex = 0;
  }
}