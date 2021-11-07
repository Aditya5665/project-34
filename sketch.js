var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	waterbottle = loadImage("waterbottle.png");
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
	//Create Bodies here

	
	var walls_options={
	isStatic:true,
	restitution:0,
	}
	ground = Bodies.rectangle(0, 380, 800, 10, walls_options);
	World.add(world,ground);
	leftWall = Bodies.rectangle(400,330,10,50, walls_options);
	World.add(world, leftWall);
	rightWall = Bodies.rectangle(550,330,10,50, walls_options);
	World.add(world, rightWall);
	wall = Bodies.rectangle(790,0,10,100, walls_options);
	World.add(world, wall);
	ground2 = Bodies.rectangle(0, 390, 800, 10, walls_options);
	World.add(world,ground2);
	ground3 = Bodies.rectangle(410, 375, 140, 10, walls_options);
	World.add(world,ground3);
	var ball_options={
		isStatic:false,
		restitution:0,
		friction:0,
		density:1.2,
	}
	ball = Bodies.rectangle(100,100,50,75,ball_options);
	World.add(world, ball);
	console.log(ground);
	Engine.run(engine);
	
}


function draw() {
  background(0);
  keyPressed();
  if(collide(ball, ground3, 50)=== false){
	text("congrats. You win", 200,200);
  }
  fill("blue");
  rect(ground.position.x, ground.position.y, 800, 10,)
  fill("green"); 
  rect(leftWall.position.x, leftWall.position.y, 10,50)
  rect(rightWall.position.x, rightWall.position.y, 10,50)
  fill("purple");
  rect(wall.position.x, wall.position.y, 10,500)
  fill("red");
  rect(ground2.position.x, ground2.position.y, 800, 10,)
  fill("pink");
  rect(ground3.position.x, ground3.position.y, 140, 5,)
  fill("blue");
  image(waterbottle, ball.position.x, ball.position.y, 50,50)
}

function keyPressed() {
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball, { x:0 ,y:0}, {x:0.7 , y: -0.7} )

	}
}


function collide(body,body,x)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,body.position.x,body.position.y);
          if(d<=x)
            {
               return true; 
            }
            else{
              return false;
            }
         }
}
