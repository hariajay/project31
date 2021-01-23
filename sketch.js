const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var eng,wld
var ground1
var plinkos = []
var divisions = []
var particles = []
var Position= []
var img
var show=1,hide=0
var type = 1
var score=0
var g1,g2,g3,g4,g5
var bg
var add = 1, rest  = 0
var increase = 1
var count = 0

function preload(){
  img = loadImage("plinko.png")
  bg = loadImage("bgp.jpg")
}
function setup() {
  createCanvas(465,627);
    eng = Engine.create()
    wld = eng.world

    
    var option = {
      density:50000,
      isStatic:true,
    }
    g1 = Bodies.rectangle(205,623,490,7,option)
    World.add(wld,g1)
    g2 = Bodies.rectangle(205,1.5,480,7,option)
    World.add(wld,g2)
    g3 = Bodies.rectangle(2,310,7,640,option)
    World.add(wld,g3)
    g4 = Bodies.rectangle(463,310,7,640,option)
    World.add(wld,g4)
    g5 = Bodies.rectangle(232.5,617,453,7,option)
    World.add(wld,g5) 
    for(var v=105; v<375; v=v+80){
      for(var p = 12; p <= 465; p=p+40){
       plinkos.push(new Plinko(p,v,4.5,4.5))
      } 
    }
    for(var n=145; n<415; n=n+80){
      for(var s = 30; s <= 465; s=s+40){
       plinkos.push(new Plinko(s,n,4.5,4.5))
      } 
    }
    for(var d=8; d<width; d=d+64.08){
      divisions.push(new Division(d,540,7,175))
    }
}
function draw() {
  background(30);  
  Engine.update(eng)

 imageMode(CENTER)
 image(bg,230,310,470,635)
 image(img,230,30,140,30)
 rectMode(CENTER)
 if(type == 1){
 textSize(20)
 fill(20,200,150)
 text("Click here to create particles",110,80)
 }
 fill("black")
 text("SCORE: "+score,20,40)

for(var D=0; D<divisions.length; D++){
  divisions[D].display()
 }
 for (var P = 0; P < plinkos.length; P++){
  plinkos[P].display()
 }
 
 fill("pink")
 rect(g1.position.x,g1.position.y,525,7)
 rect(g2.position.x,g2.position.y,525,7)
 rect(g3.position.x,g3.position.y,7,635)
 rect(g4.position.x,g4.position.y,7,635)
 fill("brown")
 rect(g5.position.x,g5.position.y,453,7)
 
 for(var B=0; B<particles.length; B++){
  particles[B].display()
  }
  
  if(Position[0]>20 && Position[0]<455 && Position[1]>480 && increase == 1){
    score +=5
    increase = 0
    count = count+1
 } 
 if(count > 50){
   score = score+0
   increase = 1
   count = 0
 }
}
function mousePressed(){
  if(mouseX>20 && mouseX<450 && mouseY>40 && mouseY<90){
    type = 0
    increase = 1
    particles.push(new Particle(mouseX,mouseY,7))
  }
  }