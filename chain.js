class chain{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
    var options ={
        bodyA: body1,
        bodyB:body2
    
    }
            this.chain =Constraint.create(options);
            World.add(world,this.chain);
            //pointB:{x:this.offsetX, y=this.offsetY}
    }
    display()
    {

        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position
        push()
stroke("red")
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
        //chain = new chain(paper1.body, ground)
pop()
    
    }
    }
    
