// Terrain Generation
// Miki Hoang
// March 3, 2026

// Small Desciption Goes Here


// -------------- GLOBAL VARIABLES ---------------
let rectWidth = 1; // Starting width of rectangles
let noiseTime = 0; // Starting Perlin noise time, determines the space between each rectangle
let noiseSpeed = 0.01; // Value determines the speed and smoothness of the animation
// -----------------------------------------------


function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
}

function draw() {
  background(220);
  frameRate(5);
  generateTerrain();
}

function generateTerrain(){
  let cur
  for(let x = 0; x < width; x += rectWidth){
    let rectHeight = map(noise(noiseTime), 0, 1, 0, height);
    rect(x, height, rectWidth, -rectHeight);
    noiseTime += noiseSpeed;
  }
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    rectWidth += 1;
  }
  else if (keyCode === LEFT_ARROW && rectWidth > 1){
    rectWidth -= 1;
  }
  generateTerrain();
}
