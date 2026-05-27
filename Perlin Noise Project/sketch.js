// Terrain Generation
// Miki Hoang
// March 3, 2026

// Small Desciption Goes Here


// -------------- GLOBAL VARIABLES ---------------
let rectWidth = 10;
let noiseTime = 5;
let noiseSpeed = 0.01;
// -----------------------------------------------


function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
}

function generateTerrain(){
  for(let x = 0; x < width; x += rectWidth){    
    let rectHeight = height * noise(noiseSpeed * noiseTime);
    rect(x, height, rectWidth, -rectHeight);
    noiseTime += noiseSpeed;
  }
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    rectWidth += 1;
  }
  else if (keyCode === LEFT_ARROW){
    rectWidth -= 1;
  }
  generateTerrain();
}

function draw() {
  background(220);
  randomSeed(25);
  generateTerrain();
}
