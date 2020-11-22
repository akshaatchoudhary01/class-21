var fixedRect, movingRect,sprite1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  sprite1=createSprite(100,100,50,100);
  sprite1.shapeColor="yellow";
  sprite1.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(sprite1,movingRect)){
 movingRect.shapeColor = "blue";
 sprite1.shapeColor = "brown";
  }
 else {
  movingRect.shapeColor = "green";
  sprite1.shapeColor="yellow";
   
 }
  drawSprites();
}
