var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90)
  weight = random(400,1500)

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  color(80,80,80);
  wall = createSprite(1500, 200, 60, height/2);

}

function draw() {
  background(255,255,255);  

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509; 
  
    if(deformation>180){
      car.shapeColor = color(230,230,0);
      fill("green");
      textSize(30);
      text("Deformation : "+Math.round(deformation), 700, 200);
      text("Lethal", 700, 150)
    }

    
    if(deformation<180 && deformation>100){
      car.shapeColor = color(230,230,0); 
      fill("yellow");
      textSize(30);
      text("Deformation : "+Math.round(deformation) , 700, 200);
      text("average", 700, 150)
    }
    
    car.shapeColor = color(0,255,0);
      fill("red");
    if(deformation<100){
      textSize(30);
      text("Deformation : "+Math.round(deformation), 700, 200);
      text("good", 700, 150) 
    }
  }

  drawSprites();


 
}
