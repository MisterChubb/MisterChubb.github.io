// MouseWheel, Map, Lerp
// Miki Hoang
// February 26, 2026

let x, y;
let diameter = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2; y = height/2;
  noFill();
  strokeWeight(3);
}



function draw() {
  background(220, 20); // Second value affects oppacity, creates fading effect

  x = lerp(x, mouseX, 0.05);
  y = lerp(y, mouseY, 0.55);
  //line(x, y, mouseX, mouseY);

  let r = map(x, 0, width, 0, 225);
  let g = map(y, 0, height, 0, 225);
  let b = 120;
  stroke(r, g, b)

  circle(x, y, diameter);
}

function mouseWheel(event){
  // Negative: scroll up -100, -200, -300
  // Positive: scroll down 100, 200, 300
  print(event.delta);
  if(event.delta < 0){ //UP
    diameter += 5;
  }
  else{ //DOWN
    diameter = max(5, diameter - 5);
  }
}
