// Random vs. Noise
// Miki Hoang
// February 27, 2026
// Looking at unpredictability, specifically the difference between uniformly distributed numbers and Perlin Noise

// GLOBAL VARIABLES
let d1, d2;
let minSize = 5; let maxSize = 200;
let x1, x2, y1, y2;

// VARIABLES FOR noise()
let noiseTime = 5; noiseSpeed = 0.02;
// "noiseSpeed" controls how connected the random noise() values are


function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width * 0.3; y1 = height * 0.5;
  x2 = width * 0.7; y2 = height * 0.5;
  //frameRate(3);
}

function draw() {
  background(0);
  // randomSeed(703); // Actual value
  // stars();
  // randomCircle();
  noiseCircle();
}

function noiseCircle(){
  // Draws a fixed circle with randomly changing but smooth diameter
  fill(100, 26, 33);
  d2 = noise(noiseTime); // Yields values between 0-1
  d2 = map(d2, 0, 1, minSize, maxSize);
  x2 = noise(noiseTime);
  // x2 = map()
  circle(x2, y2, d2);
  noiseTime += noiseSpeed
}

function randomCircle(){
  // Draw a fixed circle with random()ly changing diameter
  fill(177, 63, 200);
  d1 = random(minSize, maxSize);
  circle(x1, y1, d1);
}

function stars(){
  // Use random() to generate 100 stars
  // [alt][shift][F] - autoformat
  fill(255);
  for(let i = 0; i < 100; i++){
  let x = random(0, width);
  let y = random (0, height);
  circle(x, y, 3);
  }
}


// CHALLENGE: Use noise() to make/use a ySpeed variable. Each frame, add ySpeed to








