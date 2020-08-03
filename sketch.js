var bullet;
var wall;
var thickness;
var speed;
var weight;

function setup() {
  thickness = random(22, 83);
  weight = random(30, 52);
  speed = random(223, 321);

  createCanvas(1600, 400);
  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor = color(80, 80, 80);

  bullet = createSprite(50,200,10,6);
  bullet.shapeColor = color(0,0,0);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255); 
  
  if(collides(bullet, wall)){
    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);

    if (damage > 10){
      wall.shapeColor = color(255, 0, 0);
    }

    if (damage < 10){
      wall.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}

function collides(object1, object2) {
  var object1RightEdge = object1.x + object1.width;
  var object2LeftEdge  = object2.x;

  if (object1RightEdge >= object2LeftEdge){
    return true;
  }
  return false;
}