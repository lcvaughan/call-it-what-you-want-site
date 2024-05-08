var regularFont
var bullet = {x:10, y:305, speed:6, w:180, h:60};
var currentBulletImage, forwardBulletImage, reverseBulletImage;

function preload() {
  regularFont = loadFont('img/Cairo-Regular.ttf');
  forwardBulletImage = loadImage('img/bullet.png');
  reverseBulletImage = loadImage('img/bullet-reverse.png'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(regularFont);
  textSize(40);
  currentBulletImage = forwardBulletImage
  background('white');
}

function draw() {
  fill('black');
  text('And im in the crossfire', width/10, height/6);
  fill('white');
  text('dodging bullets', width/1.5, height/2.8);
  fill('black');
  text('from you expectancies', width/10, height/2);
  text('YEAH!\nYEAH!', width/1.8, height/1.4);
  
  //new code!//
  //display the bullet using whatever the current bullet image is
  image(currentBulletImage,bullet.x,bullet.y,bullet.w, bullet.h);
  
  //move the bullet by adding speed to it
  bullet.x += bullet.speed;
  
  //if the bullet reaches the right side 
  if (bullet.x + bullet.w/2 >= width) {
    
    //reverse its speed
    bullet.speed *= -1;
    
    //and change the current image to be the reverse bullet
    currentBulletImage = reverseBulletImage;
    
    //otherwise, if it reaches the left side
  } else if(bullet.x - bullet.w/200 <= 0) {
    
    //also reverse its speed
    bullet.speed *= -1;
    
    //and switch the current image to the forward arrow
    currentBulletImage = forwardBulletImage;
  }
}