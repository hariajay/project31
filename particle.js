class Particle{
  constructor(x,y,radius){
    var option = {
        isStatic:false,
        restitution:0.2,
        density:100,
        friction:0.0001
    }
    this.Body = Bodies.circle(x,y,radius,option)
    this.radius = radius
    this.color = color (random(40,220),random(40,220),random(40,220))
    World.add(wld,this.Body)
  }
  display(){
    var pos = this.Body.position
    push()
    ellipseMode(RADIUS)
    fill(this.color)
    ellipse(pos.x,pos.y,this.radius,this.radius)
    pop()
    Position = [this.Body.position.x,this.Body.position.y]
  }
}
 