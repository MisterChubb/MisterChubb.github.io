// Terrain Generation
// Miki Hoang
// March 3, 2026

// Small Desciption Goes Here


// -------------- GLOBAL VARIABLES ---------------
let rectWidth = 10;
// -----------------------------------------------


let noiseTime = 5;
let noiseSpeed = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
}

function generateTerrain(){
  for(let x = 0; x < width; x += rectWidth){


    
    let rectHeight = random(0, height * 0.75);



    rect(x, height, rectWidth, - rectHeight);
  }
}

function draw() {
  background(220);
  randomSeed(25);
  generateTerrain();
}
