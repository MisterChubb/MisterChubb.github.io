// Nested Loops
// Miki Hoang
// March 6, 2026

let bubbleSize = 20;
let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  populateArray();
}

function draw() {
  background(220);
  drawBubble();
}


function eDist(x1, y1, x2, y2){
  // Calculates the straight-line distance
  let a = x1 - x2;       let b = y1 - y2;
  let c = sqrt(pow(a, 2) + pow(b, 2));
  return round(c);
 // return c.toFixed(1); // Keeps 1 decimal place

}

function drawBubble(){
  // Through our array and display, a bubble at each position, possible delete if mouse is close
  // Loop by index because we want to be able to delete
  for(let i = 0; i < bubbles.length; i++){
    let b = bubbles [i];
    circle(b.x, b.y, bubbleSize);
    textAlign(CENTER, CENTER);
    let d = eDist(b.x, b.y, mouseX, mouseY);
    //text(d, b.x, b.y)
    // Where in the array is b?
    // Check if we are over top of current bubble, then delete if so:

    if(...)
  }
}


function populateArray(){
  // Simple nested loop test to make ordered pairs:
  // x: 0, 30, 60              y: 0, 30, 60
  for (let x = 0; x <= width; x += bubbleSize){
    // x: 0, 30, 60, ... right edge
    for(let y = 0; y <= height; y += bubbleSize){
      // y: 0, 30, 60... bottom edge
      let b = {x: x,   y: y};
      bubbles.push(b);
    
    }
  }
}