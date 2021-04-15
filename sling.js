class Sling{

    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var ops={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY},
        }
        this.sling=Constraint.create(ops);
        World.add(world,this.sling);
    }
    display() { 
        var pointA = this.sling.bodyA.position;
         var pointB = this.sling.bodyB.position;
         stroke("white");
          strokeWeight(4); 
    line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y + this.offsetY); 
}
}