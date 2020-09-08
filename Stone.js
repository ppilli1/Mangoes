class Stone {

  constructor (x,y,r) {
      var options = {
          isStatic: false,
          restitution: 0,
          friction: 1.0,
          density: 1.2
      }
  this.image = loadImage("Images/stone.png");

  this.body = Bodies.circle(x,y,r,options);
  this.r = r;
  World.add(world,this.body);
  }
  display(){
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      fill("red");
      ellipseMode(RADIUS);
      image(this.image,0,0,this.r,this.r);
      pop();
  }
}