class Particle{
    constructor(x,y) {
      var options = {
       restitution:0.2
      }
      this.radius = 11;
      this.body = Bodies.circle(x,y,this.radius,options);
 
      this.color=color(random(0,255),random(0,255),random(0,255))
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      noStroke()
      fill(this.color)
      ellipseMode(CENTER);
      ellipse(pos.x-50, pos.y+15, this.radius, this.radius);

    }
  };
