class Umbrella {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
       // this.image = loadImage("images/Walking Frame/walking_1.png");
        this.body = Bodies.circle(x, y, 120, options);
        //this.r = 90;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        //imageMode(CENTER);
        //image(this.image,pos.x, pos.y+70, 300,300);
        man.x = pos.x;
        man.y = pos.y;
    }
};