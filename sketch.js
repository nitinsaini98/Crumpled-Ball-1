const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbin,paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
	//Create the Bodies Here.

	//dustbin = new Dustbin(720,390,100,10);
	//paper = new Paper(100,300,10);
	ground = Bodies.rectangle( width / 2, 400 , width , 15);
	World.add(world,ground);	
	
  
}


function draw() {
  background("black");	
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
	
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

