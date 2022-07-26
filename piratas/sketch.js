const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var fondo;
var imgtorre;
var caon;
var caon2;
var canon;
var bola1;
var bolas=[];

function preload() {                         //se descargan img
 fondo=loadImage("./assets/background.gif");
 imgtorre=loadImage("./assets/tower.png");
 caon = loadImage("./assets/cannonBase.png");
 caon2 = loadImage("./assets/canon.png");
}

function setup() {

  canvas = createCanvas(1200, 600);   //canva
  engine = Engine.create();           //se crea el motor 
  world = engine.world;
  var opciones={isStatic:true};       
  ground=Bodies.rectangle(0,height-1,width*2,1,opciones);  
  World.add(world,ground);
  ground=Bodies.rectangle(0,height-1,width*2,1,opciones);  
  World.add(world,ground);
  torre = Bodies.rectangle(160,350,160,310,opciones);
  World.add(world,torre);
  angleMode(DEGREES);    
  canon = new Canon(180,110,130,100,20);
  
  
}

function draw() {
  image(fondo,0,0,width,height);  
  Engine.update(engine);   //reinicio del motor
  rect(ground.position.x, ground.position.y,width*2,1)  
  push();
  imageMode(CENTER);
  image(imgtorre,torre.position.x,torre.position.y,160,310);  //cordenadas y dimernsiones??
  pop();   //cierra funcion push
  canon.display();
  for (var i=0;i<bolas.length;i++){
    mostrarbolas(bolas[i])
  }

}
function keyPressed(){
  if (keyCode==32){
    bola1 = new  Bola(canon.x,canon.y);
    bolas.push(bola1);

  }
}
function mostrarbolas(bola){
  if (bola){
    bola.display();
  }
}
function keyReleased(){
  if (keyCode==32){
    bolas[bolas.length-1].disparar();
    console.log("hola");
    
  }
}