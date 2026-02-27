// Trailing Shapes Challenge
// Miki Hoang
// February 26, 2026

let x, y;
let sWidthHeight = 50
let diameter = 50

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2; y = height/2;
  //noFill();
  //strokeWeight(5);
  noStroke();
}

function trailingSquare(){
  x = lerp(x, mouseX, 0.15);
  y = lerp(y, mouseY, 0.66);

  square(x, y, sWidthHeight);
}

function trailingCircle(){
  x = lerp(x, mouseX, 0.1);
  y = lerp(y, mouseY, 0.2);

  circle(x, y, diameter);
}

function draw() {
  background(220);
  
  trailingSquare();
  trailingCircle();
}
