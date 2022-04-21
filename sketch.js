/***********************************************************************************
  Sprite Navigation

  Simple use of the p5.play library
------------------------------------------------------------------------------------
	To use:
	Add this line to the index.html

  <script src="p5.timer.js"></script>
***********************************************************************************/

// This is a 'sprite' which we can move
var panda;
var speed = 10;

// This is a 'sprite' which we can move
var bee;
var speed = 5;

// The is a static sprite
var star;
var starImg;

// keycods for W-A-S-D
const W_KEY = 87;
const S_KEY = 83;
const D_KEY = 68;
const A_KEY = 65;

function preload() {
  starImg = loadImage('assets/fullStar.png');
}
// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);

  // create a sprite with dimensions
  panda = createSprite(500, 127);

  // create a sprite with dimensions
  bee = createSprite(80, 80);

  // This is a *numbered* sequence of PNG files
  // We add animation to different sprites
  panda.addAnimation('floating', 'assets/panda-01.png', 'assets/panda-05.png');

  // This is a *numbered* sequence of PNG files
  // We add animation to different sprites
  bee.addAnimation('floating', 'assets/bee-01.png', 'assets/bee-03.png');

  // create a star in the middle of the screen
  star = createSprite(width/2, height/2);
  star.addImage('star', starImg);

  frameRate(30);
 }

// Draw code goes here
function draw() {
  // could draw a PNG file here
  background(34, 124, 157);

  // trap keyboard arrow keys
  checkMovement();
  checkbeeMovement();
  
  // drawSprites is a function in p5.play, draws all the sprites
  drawSprites();

  // callback function
  //ghost.overlap(star, ghostCollision);
}

// This will reset position
function keyPressed() {
  if( key === ' ') {
    panda.position.x = width/2;
    panda.position.y = height/2;
  }
}

function checkMovement() {
  // Check x movement
  if(keyIsDown(RIGHT_ARROW)) {
    panda.velocity.x = speed;
  }
  else if(keyIsDown(LEFT_ARROW)) {
    panda.velocity.x = -speed;
  }
  else {
    panda.velocity.x = 0;
  }

  // Check y movement
  if(keyIsDown(DOWN_ARROW)) {
    panda.velocity.y = speed;
  }
  else if(keyIsDown(UP_ARROW)) {
    panda.velocity.y = -speed;
  }
  else {
    panda.velocity.y = 0;
  }
}

// SpriteA is the sprite in question, spriteA will be ghost in this case
// SpriteB is the one that it collided with
function pandaCollision(spriteA, spriteB) {
  panda.position.x = 100;
  panda.position.y = 100;

  //spriteB.remove();
}

function checkbeeMovement() {
  // Check x movement
  if(keyIsDown(D_KEY)) {
    bee.velocity.x = speed;
  }
  else if(keyIsDown(A_KEY)) {
    bee.velocity.x = -speed;
  }
  else {
    bee.velocity.x = 0;
  }

  // Check y movement
  if(keyIsDown(S_KEY)) {
    bee.velocity.y = speed;
  }
  else if(keyIsDown(W_KEY)) {
    bee.velocity.y = -speed;
  }
  else {
    bee.velocity.y = 0;
  }
}
// SpriteA is the sprite in question, spriteA will be ghost in this case
// SpriteB is the one that it collided with
function beeCollision(spriteA, spriteB) {
  bee.position.x = 100;
  bee.position.y = 100;

  //spriteB.remove();
}

