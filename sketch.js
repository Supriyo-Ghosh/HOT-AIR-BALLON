var ballon;
var database;
var position;
var backgroundImg;

function preload(){
  backgroundImg=loadImage=("pro-C35 images / background.png")
}

function setup() {
  database=firebase.database()
  createCanvas(500,500);
  ballon = createSprite(400, 200, 50, 50);
  ballon.shapeColor = "red";
  var ballonPosition=database.ref('ballon/position')
  
}

function draw(){
  background(backgroundImg);

  if(keyDown(LEFT_ARROW)){
    ballon.x = ballon.x -10
  }
  else if(keyDown(RIGHT_ARROW)){
    ballon.x = ballon.x +10 
  }
  else if(keyDown(UP_ARROW)){
    ballon.y = ballon.y -10  
  }
  else if(keyDown(DOWN_ARROW)){
    ballon.y = ballon.y +10 
  }
  drawSprites();
}

function changePosition(x,y){
  ballon.x = ballon.x + x;
  ballon.y = ballon.y + y;
}

function readPosition(data){
  position=data.val()
  ballon.x=position.x
  ballon.y=position.y

}

