var gameState= 0;
var girl
var boy
function preload(){
  girlImg1= loadAnimation("Girlfinal1.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  form= new Form();
  girl=createSprite(displayWidth/2, displayHeight/2, 50,50);
  girl.addAnimation("girl1", girlImg1);
  boy= createSprite(displayWidth/2- 100, displayHeight/2, 50,50)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  form.display();
}