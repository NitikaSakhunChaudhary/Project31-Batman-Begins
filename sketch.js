const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  
var world, engine
var maxDrops=100;
var drops = [];
var umbrella;
var man_moving,man;
var lightning1,lightning2,lightning3,lightning4,lightning;
function preload(){
    lightning1 = loadImage("images/thunderbolt/1.png")
    lightning2 = loadImage("images/thunderbolt/2.png")
    lightning3 = loadImage("images/thunderbolt/3.png")
    lightning4 = loadImage("images/thunderbolt/4.png")
    man_moving = loadAnimation("images/Walking Frame/walking_1.png", "images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png", "images/Walking Frame/walking_4.png", "images/Walking Frame/walking_5.png", "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_8.png")
}

function setup(){
    engine=Engine.create();
    world = engine.world;
    createCanvas(400,700);

    lightning=createSprite(200,0,10,10);

    man = createSprite(200,400 , 10, 10);
    man.addAnimation("moving",man_moving);
    man.scale=0.5;

    umbrella = new Umbrella(200,500);
    for(var i=0;i<maxDrops;i++){
        drops.push(new Drops(random(0,400),random(0,400)));
    }

}

function draw(){
    Engine.update(engine);

    background(0);
    umbrella.display();
    for (var i = 0; i < drops.length; i++) {
        drops[i].display();
        drops[i].update();
    }


    Lightning();
    drawSprites();
}

function Lightning() {
    if(frameCount % 60 === 0) {
        var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: lightning.addImage(lightning1);
              break;
      case 2: lightning.addImage(lightning2);
              break;
      case 3: lightning.addImage(lightning3);
              break;
      case 4: lightning.addImage(lightning4);
              break;
      default: break;
        }

    }
}