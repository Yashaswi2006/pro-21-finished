var wall,thickness;
var bullet,speed,weight;

function setup() {
createCanvas(1200,400);

thickness = random(22,83);
speed=random(223,321);
weight=random(30,52);

wall=createSprite(1100,200,thickness,height/2);
wall.shapeColor="white";

bullet=createSprite(200,200,10,20)
bullet.velocityX=speed;
bullet.shapeColor="yellow";

}

function draw () {
background(0,0,0);
if(hasCollided(bullet,wall))
{ 
  bullet.velocityX=0;
var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10) {
wall.shapeColor=color(255,0,0);
}
if (damage<10) {
wall.shapeColor=color(0,255,0)
}
}

drawSprites();
}

function hasCollided(bullet,wall) {

  bulletRightEdge=bullet.x +bullet.width;
wallLeftEdge=wall.x

if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}