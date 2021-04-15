class Ball{

    constructor(x,y,r){
      // ops={
          //  isStatic:false
        // }
        this.body=Bodies.circle(x,y,r);
        World.add(world,this.body);
        
    }
}