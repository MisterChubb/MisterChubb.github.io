// Object Notation, Noise Recap
// Miki Hoang
// March 2, 2026

// GLOBAL VARIABLES
let ball, ball2; // Objects can't be created before setup


function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = { // Object notation. Inside the brackets set up a bunch of
           // property:value pairs
    x: 300,    y: 400,     size: 20,
    c: color(random(255), random(255), random(255)),
    timeX: random(100),   timeY: random(100),   timeOff: 0.08
  }
  ball2 ={
    x: 150,    y: 670,     size: 40,
    c: color(random(255), random(255), random(255)),
    timeX: random(100),   timeY: random(100),   timeOff: 0.2
  }
}

function moveBall(b){
  // b -> Ball type object
  // Update the position and draw the ball

  // Generate how to change x and y position (noise)
  let dx = noise(b.timeX); // 0-1
  dx = map(dx, 0, 1, -5, 5); // dx: -5 to 5
  let dy = noise(b.timeY); // 0-1
  dy = map (dy, 0, 1, -5, 5); // dy: -5 to 5

  // Advance our noise graph "cursors"
  b.timeX += b.timeOff; b.timeY += b.timeOff;

  // Update the position
  b.x += dx;    b.y += dy;

  // Corrections (Wrap around)
  if(b.x < 0) b.x = width;
  else if(b.x > width) b.x = 0;

  if(b.y < 0) b.y = height;
  else if(b.y > height) b.y = 0

  // Render the circle
  fill(b.c);
  circle(b.x, b.y, b.size);
}

function draw() {
  // background(220);
  moveBall(ball);
  moveBall(ball2);
}
