var wall;
//var Car=[];
var Zenia,Tourus,Cyclap;
var edges;
function setup() {
  createCanvas(1600,400);
  
  Zenia = new Car(50,50,2260,60);
  Tourus = new Car(50,100,1522,45);
  Cyclap = new Car(120,150,3000,50);
  wall=createSprite(1500,200,60,400);
edges = createEdgeSprites();
}

function draw() {
  background("black"); 
  
  Zenia.display();
  Tourus.display();
  Cyclap.display();

  Zenia.collition(wall.x,wall.width);
  Tourus.collition(wall.x,wall.width);
  Cyclap.collition(wall.x,wall.width);
  
 
}