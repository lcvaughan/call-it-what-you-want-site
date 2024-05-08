var cairoRegular;
var eyes;
var orangeFlame; 

function preload() {
  cairoRegular = loadFont('Cairo-Regular.ttf');
  eyes = loadImage('swollen-eyes.png');
  orangeFlame =loadImage('flame.png');
  
}

function setup() {
  createCanvas(700, 400);
  textFont(cairoRegular);
  textSize(20);
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
  if(mouseX < 150 && mouseY > -100) {
    rect(240,20,69,30);
  }
  if(mouseX < 250 && mouseY > -100) {
    rect(369,50,250,200);
  }
  if(mouseX < 400 && mouseY > -100) {
    rect(30,150,300,30);
  }
  if(mouseX < 500 && mouseY > -100) {
    rect(30,250,150,30);
  }
  if(mouseX < 550 && mouseY > -100) {
    rect(350,290,230,30);
  }
}