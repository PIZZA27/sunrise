const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
     create getBackgroundImg() ;
    
    bg1=loadImage("sunrise1.png")
    bg2=loadImage("sunrise2.png")
    bg3=loadImage("sunrise3.png")
    bg4=loadImage("sunrise4.png")
    bg5=loadImage("sunrise5.png")
    bg6=loadImage("sunrise6.png")
    bg7=loadImage("sunrise7.png")
    bg8=loadImage("sunrise8.png")
    bg9=loadImage("sunrise9.png")
    bg10=loadImage("sunrise10.png")
    bg11=loadImage("sunrise11.png")
    bg12=loadImage("sunrise12.png")
}


function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    //change the data in JSON format
    // write code slice the datetime
    // add conditions to change the background images from sunrise to sunset
    //load the image in backgroundImg variable here
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0300 && hour<=0500){
        bg = "sprites/bg1.png";
    }
    else if(hour>=0500 && hour<=0600) {
        bg = "sprites/bg2.jpg"; 
    }
    else if (hour>=0600 && hour<=0700){
        bg = "sprites/bg3.jpg"; 
    }else if(hour>=0700 && hour<=800) {
        bg = "sprites/bg4.jpg"; 
    }else if(hour>=1000 && hour<=1200) {
        bg = "sprites/bg5.jpg"; 
    }else if(hour>=1200 && hour<=1400){
        bg = "sprites/bg6.jpg"; 
    }else if(hour>=1400 && hour<=1600){
        bg = "sprites/bg7.jpg"; 
    }else if(hour>=1600 && hour<=1800){
        bg = "sprites/bg8.jpg"; 
    }else if(hour>=2000 && hour<=2200){
        bg = "sprites/bg9.jpg"; 
    }else if(hour>=12200 && hour<=2300){
        bg = "sprites/bg10.jpg"; 
    }else if(hour>=2300 && hour<=0000){
        bg = "sprites/bg12.jpg"; 
    }
    background = loadImage(bg1,bg2,bg3,bg4,bg5,bg6,bg7,bg8,bg9,bg10,bg11,bg12);
    console.log(background);
     
     }



