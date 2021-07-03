var garden,rabbit,carrot;
var gardenImg,rabbitImg,carrotImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  carrotImg = loadImage("carrot.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


carrot = createSprite(180,100,30,30);
carrot.scale =0.1;
carrot.addImage(carrotImg);
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}