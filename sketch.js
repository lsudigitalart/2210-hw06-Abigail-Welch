let house1, house2, houseSize, landscape1, landscape2, landscape3, blueSky, cloudySky, mountainSky, randomBack, randomLand, randomHouse

function preload() {
house1 = loadImage ("house1.png");
house2 = loadImage ("house2.png");
landscape1 = loadImage ("landscape1.png");
landscape2 = loadImage ("landscape2.png");
landscape3 = loadImage ("landscape3.png");
blueSky = loadImage ("blueSky.png");
cloudySky = loadImage ("cloudySky.png");
mountainSky =  loadImage ("mountainSky.png");

}

function setup() {
  createCanvas(400,400);

  houseSize = 200
  randomBack = round(random());
  randomLand = round(random());
  randomHouse = round(random());

  
  }
  



function draw() {
 background (225);

 //background
 if (randomBack){
 image (mountainSky, 0, -40);
 } else if (randomBack) {
 image (blueSky, 0, 0);
 } else {
 image (cloudySky, 0, 0);
 }
 //landscape
 if (randomLand){
 image (landscape1, 0, 200, 800, 250);
 } else {
  if (randomLand){
    image (landscape2, 0, 200, 800, 250);
  } else {
    image (landscape3, 0, 200, 800, 200);
  }
 }
 //house
 if (randomHouse){
 image (house1, 20, 290, houseSize, houseSize/2);
 } else {
 image (house2, 140, 290, houseSize, houseSize/2);
 }
}