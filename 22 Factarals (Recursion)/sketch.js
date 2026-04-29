// Visual Recursion
// Miki Hoang
// April 29, 2026


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  // centerCircle(width/2, height/2, width);
  // circleFractal(width/2, height/2, 700);
  luckySquare(width/2, height/2, 700);
}

function luckySquare(x, y, s){
  rectMode(CENTER);
  noFill();

  if(s > 10){
    let r = map(x, 0, width, 0, 255);
    let g = map(y, 0, height, 0, 255);
    let b = map(x, 0, width, 255, 0);
    stroke(r, g, b);

    if(dist(x, y, mouseX, mouseY)<=s/2){
      strokeWeight(5);
    }
    else strokeWeight(2);

    push();
    translate(x,y);
    rotate(radians(frameCount));
    square(0,0,s);
    pop();

    square(x, y, s);
    luckySquare(x - s/2, y - s/2, s*0.45);
    luckySquare(x + s/2, y - s/2, s*0.45);
    luckySquare(x - s/2, y + s/2, s*0.45);
    luckySquare(x + s/2, y + s/2, s*0.45);
  }

}

function circleFractal(x, y, d){
  // This better be good
  noFill();
  if(d > 1){
    circle(x, y, d);
    circleFractal(x - d/2, y, d/2);
    circleFractal(x + d/2, y, d/2);
    circleFractal(x, y + d/2, d/2);
  }
}

function centerCircle(x, y, d){
  // Recursively draw concentric circles

  // Base case...implicit
  if(d > 10){
    // Recursive case
    circle(x, y, d);
    centerCircle(x, y, d * 0.95);
  }

  // If recursive case is skipped, we unravel one level (base case)
}
