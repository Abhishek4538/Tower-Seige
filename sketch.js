const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0
var hour = 00
var BackgroundIMG

function preload() {
  getTime();
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
    
   if(BackgroundIMG){
    background(BackgroundIMG);
   }
    
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
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    
    polygon.display();


    slingshot.display();
        
   text("Score: "+score,760,40)
   if(hour>=12 && hour<=23){
    text("Time"+hour+"pm",750,30)
}
else{
    text("Time"+hour+"am",750,30)
}
   getTime();
}

function mouseDragged(){
    
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(polygon.body);
       Matter.Body.setPosition(polygon.body,{x:150,y:   200})
    }
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
     hour = datetime.slice(11,13);
     if(hour>=12 && hour<=23){
        bg = "black.png";
    }
    else{
        bg = "blue.jpg";
    }
    BackgroundIMG = loadImage(bg)
    console.log(BackgroundIMG)
    
}
