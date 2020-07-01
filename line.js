/*class Line{
  constructor(bodyA, bodyB){
      var options = {
          bodyA: bodyA,
          pointB: bodyB,
          stiffness: 0.04,
          length: 10
      }
      this.pointB=bodyB;
      this.line1 = Constraint.create(options);
      World.add(world, this.line1);
  }

  display(){
      if(this.line1.bodyA!=null)
      {
      var pointA = this.line1.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(4);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
  }
 
}*/