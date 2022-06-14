var sushi,sushiImg;
var PLAY = 1
var END = 0
var chopsticksGroup, chopsticks, chopsticksImg
var bg, invisibleGround, ground, groundImg;
var score = 0
function preload() {
  sushiImg = loadImage("nigiri.png");
  chopsticksImg = loadImage("obentou_woman.png");
  groundImg = loadImage("counter-removebg-preview.png");
  bg = loadImage("restaurant.jpg")

  if (ground.x < 0){
    ground.x = ground.width/2;
  }
}


function setup() {
  createCanvas(600, 400);

  ground = createSprite(200,380,400,40);
  ground.addImage("counter",groundImg)
  ground.x=ground.width/2

  chopsticksGroup = createGroup();
}

function draw() {
  background(bg);

  if(gameState === PLAY){
    ground.velocityX = -3
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  }
}