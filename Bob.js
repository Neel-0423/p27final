class Bob {

    constructor(x, y, color){

        var options = {

            'restitution':1,
            'friction':0,
            'frictionAir':0.0,
            'slop':1,
            'inertia':Infinity

        };

        this.body = Bodies.rectangle(x, y, 40,40,options);
        this.color = color;
        this.x = x;
        this.y = y;

        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke(4);
        fill("orange");
        ellipse(0,0,60,60);
        pop();
    }

};