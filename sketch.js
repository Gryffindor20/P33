
var Engine = Matter.Engine;
var World = Matter.World;
var Events = Matter.Events;
var Bodies = Matter.Bodies;

var snow = [];
var bg;
var kid1, kid1Img;
var snowman, snowmanImg;

function preload(){
bg = loadImage("snow1.jpg");
kid1Img = loadImage("Kid1.png");
snowmanImg = loadImage("snowman.png");
}

function setup() {
  createCanvas(800,500);

  engine = Engine.create();
  world = engine.world;

  kid1 = createSprite(600, 300, 600, 400);
  kid1.addImage(kid1Img);
  kid1.scale = 0.6;
  
  snowman = createSprite(300, 300);
  snowman.addImage(snowmanImg);
  snowman.scale = 0.4;

}

function draw() {
  background(bg);  
  Engine.update(engine);

  if(frameCount % 15 == 0){
    snow.push(new Snow(random(0,800), 0))
  }
  for (var k = 0; k < snow.length; k++){
    snow[k].display();
  }

  drawSprites();
}