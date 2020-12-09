const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var bgImage;

function preload(){
    bgImage = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(800,320,70,70);
    box2 = new Box(1000,320,70,70);
    pig1 = new Pig(900, 350);
    log1 = new Log(900,260,300, PI/2);

    box3 = new Box(800,240,70,70);
    box4 = new Box(1000,240,70,70);
    pig2 = new Pig(900, 220);
    log2 =  new Log(900,180,300, PI/2);

    box5 = new Box(900,145,70,70);
    log3 = new Log(865,130,150,PI/6);
    log4 = new Log(925,130,150,-PI/6);

    bird = new Bird(100,100);
    Engine.run(engine);

}

function draw(){
    background(bgImage);
    //Engine.update(engine);
    ground.display();

    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
}