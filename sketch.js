var tom,tomImg1,tomImg2,tomImg3;
var jerry,jerryImg1,jerryImg2,jerryImg3;
var gardenImg,garden
function preload() {
    //load the images here
gardenImg=loadImage("garden.png");

tomImg1=loadAnimation("cat1.png");
tomImg2=loadAnimation("cat2.png","cat3.png");
tomImg3=loadAnimation("cat4.png");

jerryImg1=loadAnimation("mouse1.png");
jerryImg2=loadAnimation("mouse2.png","mouse3.png");
jerryImg3=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(200,150,10,10);
tom.addImage("tom1",tomImg1);

jerry=createSprite(200,150,10,10);
jerry.addImage("jerry1",jerryImg1);
}

function draw() {

    background(255);
gardenImg.addImage("background",garden);
    //Write condition here to evalute if tom and jerry collide
if (tom.x-jerry.x < (tom.width - jerry.width)/2) {
    tom.velocityX=0
tom.addAnimation("tomLastImage",tomImg3);
tom.x =300
tom.scale=0.2;

jerry.addAnimation("jerryLastImage", jerryImg3);
jerry.scale=0.15;
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyDown(LEFT_ARROW)) {
   tom.velocityX=-5;
    tom.addAnimation("tomRunning",tomImg2);
    tom.changeAnimation("tomRunning")

    jerry.addAnimation("teasingmouse",jerryImg2);
    jerry.changeAnimation("teasingmouse");
    jerry.frameDelay=25
}

if (keyDown(RIGHT_ARROW)) {
    tom.velocityX=-5;
    tom.addAnimation("tomRunning",tomImg2);
    tom.changeAnimation("tomRunning");

    jerry.addAnimation("teasingmouse",jerryImg2);
    jerry.changeAnimation("teasingmouse");
    jerry.frameDelay=25
}

}
