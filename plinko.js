class Plinko{
  constructor(x,y,r){
   var option = {
       isStatic:true
   }
   this.Body = Bodies.circle(x,y,r,option)
   this.radius = r
   World.add(wld,this.Body)
 }
display(){
   var pos = this.Body.position
   push()
   ellipseMode(RADIUS)
   fill("white")
   ellipse(pos.x,pos.y,this.radius,this.radius)
   pop()
  }
}
