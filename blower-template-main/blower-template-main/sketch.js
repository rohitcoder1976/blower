const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;
var wall1,wall2,wall3;

function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;
 //create a object for ball
 ball=new Ball(390,330,50,50);
 //create a object for blower
 blower=new Blower(270,400,140,20);
 //create a object for blowerMouth
 blowerMouth=new BlowerMouth(390,360,150,100);

 wall1=new Wall(325,210,20,200);
 wall2=new Wall(455,210,20,200)
 wall3=new Wall(390,100,150,20);

  btn2 = createImg('click.png');
  btn2.position(20,30);
  btn2.size(50,50);
//add the mouseClicked option 
  btn2.mouseClicked(blows);

}
 
function draw() {
  background(59);
  Engine.update(engine);

  ball.show();
  blower.show();
  blowerMouth.show();

  wall1.display();
  wall2.display();
  wall3.display();
  

  //Coordinates
  textSize(20);
  fill("red");
  stroke("red");
  text("x:"+mouseX+", y:"+mouseY,mouseX,mouseY);


}

function blows() {
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:-0.05});
}
