var cairoRegular;
var eyes;
var orangeFlame; 

function preload() {
  cairoRegular = loadFont('img/Cairo-Regular.ttf');
  eyes = loadImage('img/swollen-eyes.png');
  orangeFlame =loadImage('img/flame.png');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(cairoRegular);
  textSize(40);
}

function draw() {
  background(255);
  text('We got nothing to prove', width/8,height/9);
  text('Your social guides', width/1.8, height/6);
  text('give you swollen eyes', width/1.8, height/3);
  text('But what I got',width/15, height/2.3);
  text('cant be bought',width/3.5, height/2.3);
  text('so you can just,',width/15, height/1.5);
  //text('CALL iT WHAT YOU WANT',width/2, height/1.3);//
  image(eyes,width/1.9,height/2.5,width/3,height/6);
  image(orangeFlame,width/4,height/1.4,width/7,height/3);
  noStroke()
  if(mouseX < 350 && mouseY > -100) {
    rect(535,60,100,70);
  }
  if(mouseX < 700 && mouseY > -100) {
    rect(950,50,650,700);
  }
  if(mouseX < 1000 && mouseY > -100) {
    rect(120,390,700,50);
  }
  if(mouseX < 1300 && mouseY > -100) {
    rect(120,610,300,60);
  }
}