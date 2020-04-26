var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);  
  
  drawSprites();
}
function bounceOff(arg1,arg2) {
  if (arg1.x - arg2.x <arg2.width/2 + arg1.width/2
    && arg2.x - arg1.x < arg2.width/2 + arg1.width/2) {
      arg1.velocityX = arg1.velocityX * (-1);
    arg2.velocityX = arg2.velocityX * (-1);
  }
  if (arg1.y - arg2.y < arg2.height/2 + arg1.height/2
    && arg2.y -arg1.y < arg2.height/2 + arg1.height/2){
      arg1.velocityY = arg1.velocityY * (-1);
   arg2.velocityY = arg2.velocityY * (-1);
  }
}