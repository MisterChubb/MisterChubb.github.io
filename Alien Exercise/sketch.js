// Alien Drawing Exercise
// Miki Hoang
// February 10, 2026



function setup() {
  createCanvas(windowWidth, windowHeight);
  centerX = width/2;
  centerY = height/2;
}

function lilGuyBase(){
circle(centerX, centerY, 200);
noStroke();
fill("Orange");

rect(centerX - 100, centerY, 200, 150);
}

function lilGuyLegs(){
  rect(centerX - 100, centerY  + 100, 30, 100, 20); // Left Leg
  rect(centerX + 70, centerY  + 100, 30, 100, 20); // Right Leg
}

function lilGuyFeatures(){

}

function draw() {
  background(225);
  lilGuyBase();
  lilGuyLegs();
  lilGuyFeatures();
}
