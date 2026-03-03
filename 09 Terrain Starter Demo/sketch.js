// Terrain Starter (Use for actual project)
// Miki Hoang
// March 3, 2026

let rectWidth = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  //noLoop(); // Can leave this for now, remove in actual project
}

function generateTerrain(){
  // Using a loop, construct a number of side by side rectangles of random height,
  // to be 2D terrain
  for(let x = 0; x < width; x += rectWidth){
    // Generates a random (negative) height
    // Eventually replace this with noise()
    let rectHeight = random(0, height*0.75);


    rect(x, height, rectWidth, -rectHeight);
  }
}

function draw() {
  // Stabalizes random values once per frame. This needs to be adapted for noise()
  // once we switch out of random.
  randomSeed(25);


  background(220);
  generateTerrain();
}
