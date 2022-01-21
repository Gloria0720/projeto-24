const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var ferro;
var stone;
var rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    ferro = new Ferro(150, 50);
    stone = new Stone(50, 100, 20);
    rubber = new Rubber(40, 90, 20);


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    ferro.display();
    stone.display();
    rubber.display();

    
 
}