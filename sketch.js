var satelitte, satelitteImg;
var earth, earthImg;
var groundStationLeft, groundStationRight;
var groundStationLeftImg, groundStationRightImg;
var upLinkLeft, upLinkLeftImg;
var space,spaceImg

function preload() {
  satelitteImg = loadImage("satellite.png");

  groundStationLeftImg = loadImage("gstation1.png");
  groundStationRightImg = loadImage("gstation2.png");

  earthImg = loadAnimation("earth1.png");
  
  spaceImg=loadAnimation("spacebg2.png", "other/spacebg1.png")


  upLinkLeftImg = loadAnimation(
    "upleft1.png",
    "upleft2.png",
    "upleft3.png",
    "upleft4.png",
    "lefupleft5.png",
    "upleft6.png",
    "upleft7.png",
    "upleft8.png"
  );

  upLinkRightImg = loadAnimation(
    "upright1.png",
    "upright2.png",
    "upright3.png",
    "upright4.png",
    "upright5.png",
    "upright6.png",
    "upright7.png",
    "upright8.png"
  );

  downLinkLeftImg = loadAnimation(
    "dleft1.png",
    "dleft2.png",
    "dleft3.png",
    "dleft4.png",
    "dleft5.png",
    "dleft6.png",
    "dleft7.png",
    "dleft8.png"
  );

  downLinkRightImg = loadAnimation(
    "dright1.png",
    "dright2.png",
    "dright3.png",
    "dright4.png",
    "dright5.png",
    "dright6.png",
    "dright7.png",
    "dright8.png"
     
  );

}

function setup() {
  createCanvas(750, 500);
  
  space=createSprite(375,250,50,50)
  space.addAnimation("space", spaceImg)
  space.scale=0.7
  space.frameDelay = 50;

  earth = createSprite(380, 820, 50, 50);
  earth.addAnimation("earth", earthImg);
  earth.scale = 0.6;
  
  satelitte=createSprite(375,100,50,50)
  satelitte.addAnimation("satelitte", satelitteImg)
  satelitte.scale=0.08
  
  groundStationLeft=createSprite(100,430,50,50)
  groundStationLeft.addAnimation("signal1", groundStationLeftImg)
  groundStationLeft.scale=0.04
  
  groundStationRight=createSprite(650,430,50,50)
  groundStationRight.addAnimation("signal2", groundStationRightImg)
  groundStationRight.scale=0.04
  
  upLinkLeft=createSprite(235,285,50,50)
  upLinkLeft.addAnimation("send1", upLinkLeftImg)
  upLinkLeft.scale=0.07
  
  upLinkRight=createSprite(515,285,50,50)
  upLinkRight.addAnimation("send2", upLinkRightImg)
  upLinkRight.scale=0.07
  
  downLinkLeft=createSprite(235,285,50,50)
  downLinkLeft.addAnimation("send1", downLinkLeftImg)
  downLinkLeft.scale=0.07
  
  downLinkRight=createSprite(515,285,50,50)
  downLinkRight.addAnimation("send2", downLinkRightImg)
  downLinkRight.scale=0.07
}

function draw() {
  background("black");
  
  upLinkLeft.visible=false
  upLinkRight.visible=false
  downLinkLeft.visible=false
  downLinkRight.visible=false
  
  textSize (15)
  fill ("red")
  
  if (keyDown("l")){
    upLinkLeft.visible=true
    text ("Requesting data fron satelitte", 235,285)
  }
  
  if  (keyDown("r")){
    upLinkRight.visible=true
  }
 
    if (keyDown("left")){
    downLinkLeft.visible=true
  }
  
  if  (keyDown("right")){
    downLinkRight.visible=true
  }
  
 
  drawSprites();
  
  fill ("white")
  textSize(15)
  text ("Press L & R keys",10,20)
  fill ("white")
  textSize(15)
  text ("-to request data from satelitte",10,35)
  fill ("white")
  textSize(15)
  text ("Press Left & Right arrow keys",10,55)  
  fill ("white")
  textSize(15)
  text ("-to receive data from satelitte",10,70)
      
  textSize (15)
  fill ("red")
  
  if (keyDown("l")){

    text ("Requesting data from satelitte", 15,285)
  }
  
      if (keyDown("left")){
        
    text ("Transferring data to Left base station", 15,200)  
  }
  
  textSize (15)
  fill ("green")
  if  (keyDown("r")){
     text ("Requesting data from satelitte", 540,285)
  }
  
  if  (keyDown("right")){
  
    text ("Transferring data to Right base station", 490,200) 
  }
}
