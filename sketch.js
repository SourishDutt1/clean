

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,620,width,20);
	dustbin1=new Dustbin(1200,510,20,200);

	dustbin2=new Dustbin(1000,510,20,200);
	dustbin2.shapeColor="white"
	dustbin3=new Dustbin(1100,600,200,20);
	dustbin3.shapeColor="green"
	//Create a Ground


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
 
  
  paperObject.display();
  groundObject.display();
  
  dustbin1.display();
  fill("orange");
  dustbin2.display();
  fill("white");
  dustbin3.display();
  fill("green");
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

  
	}
}




