const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = "OnSling";
var box1, pig1;
var backgroundImg,platform;
var boyImg, stone, slingShot, treeImg;

function preload()
{
  boyImg = loadImage("Images/boy.png");
  treeImg = loadImage("Images/tree.png");
}

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,700,20);
	//tree = new Tree(600,350,300,600);
	
	mango1 = new Mango(500,225,20);
	mango2 = new Mango(550,250,20);
	mango3 = new Mango(500,300,20);
	mango4 = new Mango(650,275,20);
	mango5 = new Mango(700,250,20);

	stone1 = new Stone(138,492,20);
  
  slingShot = new SlingShot(stone1.body,{x:138,y:492});
	
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  fill("white");
  text(mouseX + ":" + mouseY, 400,100)

  
  ground.display();
  //tree.display();
  image(boyImg,105,440,200,250);
  imageMode(CENTER);
  image(treeImg,600,350,300,600);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone1.display();
  slingShot.display();
  
  detectCollision(mango1,stone1);
  detectCollision(mango2,stone1);
  detectCollision(mango3,stone1);
  detectCollision(mango4,stone1);
  detectCollision(mango5,stone1);

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(stone1.body, {x:235,y:420})
      slingShot.attach(stone1.body);
  }
}

function mouseDragged(){
  //if(gameState == "OnSling") {
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
  //}
}

function mouseReleased(){
  slingShot.fly();
  gameState = "Launch";
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(stone1.body);
      gameState = "OnSling";
  }
}

function detectCollision(lmango,lstone) {
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance <= lmango.r + lstone.r){
      Matter.Body.setStatic(lmango.body,false);
      //console.log("hello")
    }
}