// Terrain Generation
// Miki Hoang
// March 3, 2026

// A program that uses Perlin noise to generate a lush, scrolling terrain. Such glorious land must be conquered by the Blue Clan, however, so a flag is planted on the highest peaks!
//Don't tell the Red Clan...


// -------------- GLOBAL VARIABLES ---------------
let rectWidth = 1;
let noiseTime = 0;
let noiseSpeed = 0.01;
// -----------------------------------------------


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function generateTerrain(){
  let curNoiseValue = noiseTime; // Resets the current noise value
  // ----- FLAG VARIABLES -----
  let maxX = 0;
  let maxY = height;
  let maxRectHeight = 0;
  // ----- AVERAGE LINE VARIABLES -----
  let numOfRect = 0;
  let totalRectHeight = 0;
  let avgRectHeight = 0;

  for(let x = 0; x < width; x += rectWidth){
    let noiseValue = noise(curNoiseValue); // Generates a random noise value between 0 and 1
    let rectHeight = map(noiseValue, 0, 1, 0, height); // Map the noise value to the height range of the canvas

    push();
    noStroke();
    fill("#70c910");
    rect(x, height, rectWidth, -rectHeight); // Draws terrain rectangles
    pop();

    numOfRect ++;
    totalRectHeight = totalRectHeight + rectHeight;
    avgRectHeight = totalRectHeight/numOfRect;

    if(rectHeight > maxRectHeight){ // If the current rectHeight is greater than the current maxRectHeight, the new maxRectHeight becomes the current rectHeight
      maxRectHeight = rectHeight;
      maxX = x + (rectWidth/2); // Calculates the middle point of the x coordinate of the highest peak to plant the flag
      maxY = height - rectHeight; // Calculates the y coordinate of the highest peak to plant the flag
    }
    curNoiseValue += noiseSpeed; // Increments the noise value for the next rectangle to create varied peaks
  }
  drawFlag(maxX, maxY);
  drawAvgLine(avgRectHeight);
  noiseTime += noiseSpeed; // Creates scrolling effect
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

function drawFlag(x,y){
  fill("#1019c9");
  line(x, y, x, y - 25);
  triangle(x, y - 30, x + 20, y - 22, x, y - 15);
}

function drawAvgLine(y){
  push();
  stroke("red");
  line(0, y, width, y);
  pop();
}

function draw() {
  background("#99f8ff");
  generateTerrain();
}