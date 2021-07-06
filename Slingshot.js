class Slingshot {
    constructor(bodya, bodyb) {
        var options = {
            bodyA:bodya,bodyB:bodyb,length:5,stiffness:0.5
        }
        this.rod = Matter.Constraint.create(options);
        World.add(world,this.rod);
    }
    display(){
        push ();
strokeWeight(5);
stroke("black");
var a = this.rod.bodyA.position;
var b = this.rod.bodyB.position
line(a.x,a.y,b.x,b.y);
        pop ();
    }
} 