
function setup() {
  createCanvas(400,400);
  background(51);
  ball = createSprite(200,200,30,30);
  ball.shapeColor = "purple"
}

function draw() 
{


  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    ball.x=ball.x+5
    ball.shapeColor = "blue"
  }
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    ball.x=ball.x-5
    ball.shapeColor = "yellow"
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   ball.y=ball.y-5
   ball.shapeColor = "green"
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    ball.y=ball.y+5
    ball.shapeColor = "red"
  }


  
  drawSprites();
}

