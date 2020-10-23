const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   

    ground = new Ground(400,250,200,20);
    
    box1 = new Box(400,230,30,30);
    box2 = new Box(435,230,30,30);
    box3 = new Box(470,230,30,30);
    box4 = new Box(365,230,30,30);
    box5 = new Box(330,230,30,30);
    box6 = new Box(417.5,190,30,30);
    box7 = new Box(452.5,190,30,30);
    box8 = new Box(382.5,190,30,30);
    box9 = new Box(347.5,190,30,30);
    box10 = new Box(365,160,30,30);
    box11 = new Box(400,160,30,30);
    box12 = new Box(435,160,30,30);
    
    polygon = new Polygon(150,200);
    slingshot = new SlingShot(polygon.body,{x:150, y:200});
}

function draw(){
    
   
    background(0);
    
    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();
    
    
    box3.display();
    box4.display();
    
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    
    polygon.display();


    slingshot.display();
        
   
}

function mouseDragged(){
    
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
       /* slingshot.attach(bird.body);*/
    }
}

