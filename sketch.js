const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var hr
var engine, world;
var backgroundImg;

var bg ;

function preload() {
getBackgroundImg() 
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background (backgroundImg)
    }
    textSize(20)
    if(hr>=12){
        text("Time="+hr%12+"pm",50,50);
    }else if(hr===0){
        text("Time=12am",50,50);
    }else {
        text("Time="+hr%12+"am",50,50);
    }
    


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
var time1 = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
var tjson = await time1.json();
var dt = tjson.datetime;
hr = dt.slice(11,13);
if(hr>=04&&hr<06){
    bg="sunrise1.png"
}else if(hr>=06&&hr<08){
    bg="sunrise2.png"
}else if(hr>=08&&hr<10){
    bg="sunrise3.png"
}else if(hr>=10&&hr<11){
    bg="sunrise4.png"
}else if(hr>=11&&hr<12){
    bg="sunrise5.png"
}else if(hr>=12&&hr<13){
    bg="sunrise6.png"
}else if(hr>=13&&hr<15){
    bg="sunset7.png"
}else if(hr>=15&&hr<17){
    bg="sunset8.png"
}else if(hr>=17&&hr<18){
    bg="sunset9.png"
}else if(hr>=18&&hr<19){
    bg="sunset10.png"
}else if(hr>=19&&hr<21){
    bg="sunset11.png"
}else{
    bg="sunset12.png"
}
backgroundImg=loadImage(bg)
}
