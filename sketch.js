
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// var engine , world;
// var paper,ground;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

  paper = new PaperBall(30,100,40);
  ground = new Ground(400,690,800,60);


	
  
}


function draw() {
  rectMode(CENTER);
  background(80,80,80);
  Engine.update(engine);

paper.display();
ground.display();

  //drawSprites();
 
}



