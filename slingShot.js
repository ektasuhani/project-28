class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    

    display(){
       
      if(this.sling.bodyA){

      
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            line (pointA.x,pointA.y,pointB.x,pointB.y)
           
            
            pop();
      }
     
        }
        attach(body){
          this.sling.bodyA = body;
      }
        fly(){
          this.sling.bodyA=null  
        }
    }
    
    