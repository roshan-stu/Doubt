
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var leftSide
var rightSide

function preload()
{
	
}

function setup() {
	createCanvas(1500, 1500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0.3,
		density:1.2

	}


	ball=Bodies.circle(20,30,20,ball_options)
	

	World.add(world,ball)

	ground=new Ground(width/2,670,width,20)
	leftSide-new Ground(1100,600,20,120)
	rightSide-new Ground(1200,600,20,120)
	Engine.run(engine);

  
}


function draw() {
  
  background(0);
  ground.show()
  leftSide.show()
  rightSide.show()
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,20,20)
  
  drawSprites();
 
}



