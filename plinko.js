class Plinko {
    constructor(x,y) {
      var options = {

        isStatic:true
        
      }
      this.radius = 13;
      this.body = Bodies.circle(x,y,this.radius,options);
      

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      

      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, this.radius, this.radius);
    
    }
  };
