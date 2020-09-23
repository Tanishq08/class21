var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(400, 100, 50, 80);
  rect1.shapeColor = "green";
  rect1.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  
}

function draw() {
  background(0,0,0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
if (isTouching(rect1,movingRect)){
  rect1.shapeColor="red"
movingRect.shapeColor="red"
}
else {
  rect1.shapeColor="green"
movingRect.shapeColor="green"
}
  drawSprites();
}
function isTouching(obj1,obj2){
 if (obj1.x-obj2.x<obj1.width/2+obj2.width/2&&
  obj2.x-obj1.x<obj1.width/2+obj2.width/2&&
  obj1.y-obj2.y<obj1.height/2+obj2.height/2&&
  obj2.y-obj1.y<obj1.height/2+obj2.height/2){
    return true;
  }
  else {
    return false;
  }

}


