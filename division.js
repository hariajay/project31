class Division{
  constructor(x,y,width,height){
        var option = {
            isStatic:true,
            density:1000
        }
        this.Body = Bodies.rectangle(x,y,width,height,option)
        this.w = width
        this.h = height
        World.add(wld,this.Body) 
    }
    display(){
        var pos = this.Body.position
        push()
        rectMode(CENTER)
        fill(110,203,250)
        rect(pos.x,pos.y,this.w,this.h)
        pop()
    }
}
