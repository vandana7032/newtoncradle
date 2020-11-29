
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var roof;
var bob1;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	


	roof=new Roof(510,100,300,20);
	//Create the Bodies Here.
	
	bob1=new Bob(510,300,50);
	bob2=new Bob(460,300,50);
	bob3=new Bob(560,300,50);
	bob4=new Bob(410,300,50);
	bob5=new Bob(610,300,50);
	rope1=new Rope(bob1.body,roof.body,0,0);
	rope2=new Rope(bob2.body,roof.body,-50,0);
	rope3=new Rope(bob3.body,roof.body,50,0);
	rope4=new Rope(bob4.body,roof.body,-100,0);
	rope5=new Rope(bob5.body,roof.body,100,0);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  drawSprites();
 
}function keyPressed(){
	if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:40,y:-40});
	}
}




