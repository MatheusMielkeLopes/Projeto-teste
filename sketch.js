var table
var disco
var disco2
var ball
var tableimg
var discoimg
var disco2img
var ballimg
var rectangle
var rectangle2
var rectangle3
var rectangle4


function preload()
{ 
ballimg = loadImage ("bolaverde.png")
discoimg = loadImage ("disco.png")
disco2img = loadImage ("disco.png")
tableimg = loadImage ("table.png")
}

function setup() {
  createCanvas(1000,500);
  
  rectangle = createSprite (500,10,1000,15)
  rectangle2 = createSprite (500,492,1000,15)
  rectangle3 = createSprite (990,250,15,500)
  rectangle4 = createSprite (10,250,15,500)

  rectangle.visible = false
  rectangle2.visible = false
  rectangle3.visible = false
  rectangle4.visible = false
   
  disco = createSprite (103,250,50,50)
  disco2 = createSprite (900,250,50,50)
  ball = createSprite (500,250,30,30)
  disco.addImage (discoimg)
  disco2.addImage (discoimg)
  ball.addImage (ballimg)

  disco.scale = 0.4  
  disco2.scale = 0.4
  ball.scale = 0.15

}

function draw() 
{
  background(tableimg);
  
  drawSprites();
}


