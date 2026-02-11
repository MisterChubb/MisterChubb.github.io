// Multiple Keypress Detection
// Drawing Practice
// Miki Hoang
// February 10, 2026


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function checkMulti(){
  // A function to demonstarte how we can check if multiple keryboard buttons are pressed at once
  strokeWeight(mouseX / 10);
  stroke(255, 0, 0);
  
  // Check for multiple keypresses (3 simult.)
  let a = keyIsDown(65); //a
  let b = keyIsDown(66); //b
  let c = keyIsDown(67); //c

  let str = "a: " + a + "b: " + b + "c" + c;
  textSize(40);
  text(str, 100, 300);
}

function draw() {
  background(220);
  checkMulti();
}
