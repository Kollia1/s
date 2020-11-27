const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles =[]
var plinkos=[]
var divisions=[]
var divisionHeight=300;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height,width,10);
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Ground(k,height-divisionHeight/2,10,divisionHeight))

  }

  for(var j=10;j< width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var t=50; t< width-50; t=t+50){
    plinkos.push(new Plinko(t,125));
  }
  for(var i=10; i< width; i=i+50){
    plinkos.push(new Plinko(i,175));
  }
  for(var g=50; g< width-50; g=g+50){
    plinkos.push(new Plinko(g,225));
  }
  
}

function draw() {
  background(0); 
  Engine.update(engine)
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();

  }
  for(var j=0;j< plinkos.length; j++){
    plinkos[j].display();
  }
  for(var t=0; t<plinkos.length; t++){
    plinkos[t].display();
  }
  for(var i=0; i<plinkos.length; i++){
    plinkos[i].display();
  }
  
  for(var g=0; g<plinkos.length; g++){
    plinkos[g].display();
  }
  
  ground.display() 

  if(frameCount%90==0){
    particles.push(new Particle(random(width),50))
  }  
  for(var g=0; g<particles.length; g++){
    console.log(particles[g])
    particles[g].display();
  }

  
}