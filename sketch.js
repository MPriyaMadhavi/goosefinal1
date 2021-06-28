var gameState = 0;
var background, backgroundImg;
var background1, backgroundImg1;
var level1bg, level1bgImg;
var start, startImg;
var story, storyImg;
var play, playImg;
var home, homeImg;
var infoSlide, infoSlideImg;
var level1story, level1Img;
var level2story, level2Img;
var book, bookImg;
var youwin, youwinImg;
var gameover, gameoverImg;
var playagain, playagainImg;
var restart, restartImg;
var player, playerImg;
var youwinstory, youwinstoryImg;
var gameState="play"

const accessCode1 = "ZOMBIE";
const accessCode2 = "VAMPIRE";
const accessCode3 = "SKELETON";
const accessCode4 = "DRACULA";
const accessCode5 = "WITCH";
const accessCode6 = "72";
const accessCode7 = "MUMMY";


function preload(){
backgroundImg = loadImage("images/background.png");
backgroundImg1 = loadImage("images/background.png");
level1bgImg = loadImage("images/level1_bg.jpg");
startImg = loadImage("images/start.png");
storyImg = loadImage("images/story.png");
playImg = loadImage("images/play.png");
homeImg = loadImage("images/home.png");
infoSlideImg = loadImage("images/infoSlide.png");
level1Img = loadImage("images/level 1 story.png");
level2Img = loadImage("images/level 2 story.png");
bookImg = loadImage("images/book.jpg");
youwinImg = loadImage("images/youwinbg.jpg");
gameoverImg = loadImage("images/gameover.png");
playagainImg = loadImage("images/playagain.png");
restartImg = loadImage("images/restart.png");
playerImg = loadImage("images/s1.png")//,"images/s2.png","images/s3.png","images/s4.png","images/s5.png","images/s6.png");
youwinstoryImg = loadImage("images/youwin_story.png");
sound1 = loadSound("sounds/halloween_sound1.mp3");
sound2 = loadSound("sounds/level1_sound2.mp3");

}

function setup() {
createCanvas(1000,600);
//sound1.play();
// homeButton = createSprite(750,60);
// homeButton.addImage(homeImg);
// homeButton.scale = 0.5;
// homeButton.visible = false;

// startButton = createImg("images/start.png");
// startButton.position(100,350);
// startButton.size(100,100)
startButton = createSprite(100,350);
startButton.addImage(startImg);
startButton.scale = 0.5;
// startButton.visible = false;


storyButton = createImg("images/story.png");
storyButton.position(50,150);
storyButton.size(100,100)


// playButton = createSprite(750,150);
// playButton.addImage(playImg);
// playButton.scale = 0.4;
// // playButton.visible = false;


}

function draw() {

 
    if(backgroundImg)
background(backgroundImg);  

if(mousePressedOver(startButton)){
    background(level1Img);

    startButton.visible = false;
    storyButton.hide()
    playButton=createImg('images/play.png')
    playButton.position(750,180);
    playButton.size(50,50);
    playButton.mousePressed(()=>{
      
      play1()
    })
    // homeButton=createImg('images/home.png')
    // homeButton.position(750,60);
    // homeButton.size(50,50);
    // homeButton.mouseClicked(home)
    backgroundImg=null;
}

   





storyButton.mousePressed(()=>{
    background(infoSlideImg);
// startButton.visible = false;
// storyButton.visible = false;
homeButton=createImg('images/home.png')
homeButton.position(750,60);
homeButton.size(50,50);
homeButton.mouseClicked(home)
startButton.visible=false;
backgroundImg=null;
})
 

 drawSprites();

}
// function play2(){
  
//     background(backgroundImg)

//     var player=createSprite(100,50)
//     player.addAnimation("player",playerImg)
  
//     if(keyDown("RIGHT_ARROW")){
//         player.velocityX=5
//         }

//         if(keyCode==="LEFT_ARROW"){
//             player.x=player.x-100;
//             }
//             if(keyCode==="UP_ARROW"){
//                 player.y=player.y-100;
//                 }
//                 if(keyCode==="DOWN_ARROW"){
//                     player.y=player.y+100;
//                     }
           
// // maze code
// var cardboard1=createSprite(10,70,100,20);
// cardboard1.shapeColor="brown";

// var cardboard2=createSprite(105,35,20,150);
// cardboard2.shapeColor="brown";

// var cardboard3=createSprite(175,35,120,20);
// cardboard3.shapeColor="brown";

// var cardboard4=createSprite(150,145,20,120);
// cardboard4.shapeColor="brown";

// var cardboard5=createSprite(100,220,100,20);
// cardboard5.shapeColor="brown";

// var cardboard6=createSprite(60,175,20,100);
// cardboard6.shapeColor="brown";

// var cardboard7=createSprite(210,200,20,150);
// cardboard7.shapeColor="brown";

// var cardboard8=createSprite(250,95,145,20);
// cardboard8.shapeColor="brown";

// var cardboard9=createSprite(280,60,20,50);
// cardboard9.shapeColor="brown";

// var cardboard10=createSprite(75,300,20,100);
// cardboard10.shapeColor="brown";

// var cardboard11=createSprite(2,160,100,20);
// cardboard11.shapeColor="brown";

// var cardboard12=createSprite(370,40,100,20);
// cardboard12.shapeColor="brown";

// var cardboard13=createSprite(370,150,200,20);
// cardboard13.shapeColor="brown";

// var cardboard14=createSprite(280,260,20,100);
// cardboard14.shapeColor="brown";

// var cardboard15=createSprite(365,260,100,20);
// cardboard15.shapeColor="brown";

// var cardboard16=createSprite(295,315,150,20);
// cardboard16.shapeColor="brown";

// var cardboard17=createSprite(360,95,20,90);
// cardboard17.shapeColor="brown";

// var cardboard18=createSprite(30,290,80,20);
// cardboard18.shapeColor="brown";

// var cardboard19=createSprite(150,290,20,100);
// cardboard19.shapeColor="brown";

// var cardboard20=createSprite(270,360,100,20);
// cardboard20.shapeColor="brown";

// var cardboard21=createSprite(10,350,20,100);
// cardboard21.shapeColor="brown";

// var cardboard22=createSprite(215,355,20,100);
// cardboard22.shapeColor="brown";

// drawSprites();
// }

function home2(){
background(level2Img );
startButton.visible = false;
storyButton.visible = false;

playButton=createImg('images/play.png')
playButton.position(750,180);
playButton.size(50,50);
playButton.mouseClicked(play2);
}

function play1(){
playButton.hide();
background(level1bgImg);
security = new Security();
security.display()
clues()
startButton.visible = false;
storyButton.hide()
}



function home(){
    
     background(backgroundImg1)
    startButton = createSprite(100,350);
    startButton.addImage(startImg);
    startButton.scale = 0.5;
    storyButton = createImg("images/story.png");
    storyButton.position(50,150);
    storyButton.size(100,100)
    
storyButton.mousePressed(()=>{
    background(infoSlideImg);
    storyButton.hide()
// startButton.visible = false;
// storyButton.visible = false;

// homeButton=createImg('images/home.png')
// homeButton.position(750,60);
// homeButton.size(50,50);
// homeButton.mouseClicked(home)
startButton.visible=false;
backgroundImg=null;
})
  

}

function play2(){
    background(level1bgImg)
    security1 = new Security1();
security1.display()
clues2()
}


function clues() {
    
fill("white")
textSize(15)
text("I E Z B O M", 500,50)
fill("lightblue")
text("Hint: If it bites you will be infected!!",500,70)

fill("white")
textSize(15)
text("M P R E I V A", 500,170)
fill("lightblue")
// text("Hint: Performs a particular task !!", 700,170)

fill("white")
textSize(15)
text("L E S E K O N T", 500,270)
fill("lightblue")
// text("Hint: Stores all information !!", 100,270)

fill("white")
textSize(15)
text("A D L C R U A", 500,370)
fill("lightblue")
text("Hint:It sucks blood!!",500,390)

fill("white")
textSize(15)
text(" T H  C W I ", 500,470)
fill("lightblue")
text("Hint: IT STAYS ON THE BANYAN TRE AT NIGHT !!", 500,490)




}
function clues2() {
    
    fill("white")
    textSize(15)
    text("4(10+15/5*4-2*2", 300,50)
    fill("lightblue")
    text("solve this sum",300,70)
    
    fill("white")
    textSize(15)
    text("I am wrapped but I am not a gift,I am kept neatly in a chamber and Archeologists find me as a great treasure", 200,170)
    fill("lightblue")
     text("Solve this riddle",200,150)
    
 
    
    
    
    
    }