var back,player;

var backimg,playerimg,gym,bath,eat,brush;

function preload(){
backimg = loadImage("iss.png");
playerimg = loadAnimation("sleep.png");
gym = loadAnimation("gym11.png","gym12.png");
bath = loadAnimation("bath1.png","bath2.png");
eat = loadAnimation("eat1.png","eat2.png");
brush = loadAnimation("brush.png");
}

function setup() {
  createCanvas(800,400);
  back = createSprite(400,200);
  back.addImage(backimg);
  back.scale = 0.2;
  player = createSprite(400, 200, 50, 50);
  player.addAnimation("runtime",playerimg);
  player.scale = 0.15;
}

function draw() {
  //background(255,255,255); 
  Edges = createEdgeSprites();
  player.collide(Edges[0]);
  player.collide(Edges[1]);
  player.collide(Edges[2]);
  player.collide(Edges[3]);
  if(keyDown(DOWN_ARROW)){
  player.addAnimation("runtime",gym);
  } 
  if(keyDown(LEFT_ARROW)){
    player.addAnimation("runtime",bath);
    } 
    if(keyDown(RIGHT_ARROW)){
      player.addAnimation("runtime",eat);
      } 
      if(keyDown(UP_ARROW)){
        player.addAnimation("runtime",brush);
        } 
        if(keyDown("m")){
          player.x = player.x + 2;
          player.y = player.y + 2;
          } 

  drawSprites();
}