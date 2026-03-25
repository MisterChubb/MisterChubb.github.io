// Basic Transformations Sandbox
// Miki Hoang
// March 9, 2026


let originalSpacing = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // ALL TRANSFORMATIONS RESET AT draw()
background(255);
drawBasicGrid(220);


  // TRANSFORMATION ONE: TRANSLATION
  // push(); // Copies original coordinate system
  // translate(200, 150); // x, y, (z)
  // drawBasicGrid(150);
  // rectangleRed(0,0);
  // pop(); // Back to regular 0,0 in the corner

  // push();
  // translate(100,300);
  // drawBasicGrid(0);
  // rectangleBlue(0,0);
  // pop();
 

  //add push()  pop()




  // TRANSFORMATION TWO: SCALE
  // Scale works with respect to the ORIGIN
  // Can use negative scale to flip coordinate system
  // background(255);
  // let s = map(mouseX, 0, width, 0.1, 8);
  // translate(200,200);
  // scale(s); // 0-1 reduction
  //             // 1 no change
  //             // > 1 enlargement
  // drawBasicGrid(150);
  // rectMode(CENTER);
  // rectangleRed(0,0);




  // TRANSFORMATION THREE: ROTATION
  //reminder: rotations are measured in radians, not degrees! Functions can help with the conversion...
  // Rotations are relative to origin
  angleMode(DEGREES); // Usually written in setup()
  // translate(300,300);
  // rotate(15);
  // rotate(frameCount);
  // // drawBasicGrid(150);

  // face(0,0);

  //Combinations of Transformations

  
  // -------- CHALLENGE ---------
  push();
  translate(200, 200);
  rotate(frameCount*3);
  fill("Lime");
  circle(0, 0, 150);
  let n = 100;
  for(let i = 0; i < n; i++){
    line(0, 0, 0, 75);
    rotate(360/n)
  }
  // pop()
  // translate(200, 200);
  // rotate(frameCount*10);
  // fill("Cyan");
  // circle(0, 0, 300);
  // let c = 50;
  // for(let i = 0; i < c; i++){
  //   line(0, 0, 0, 75);
  //   rotate(360/c)
  // }
  // push();

}


function face(x, y) {
  //draw a face at x,y
  push();
  translate(x,y);
  ellipseMode(CENTER);
  fill(200,200,0);
  stroke(0);
  ellipse(0,0,80,80);
  fill(90, 140, 30, 220);
  triangle(-20, 20, 20, 20, 0, 30);
  fill(0);
  ellipse(-25,0,10,10);
  ellipse(25,0,10,10);
  strokeWeight(5);
  line(-30,-10,30,-10);
  strokeWeight(1);
  pop();

}

function rectangleRed(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(255, 0, 0, 150);
  rect(x, y, 50, 50);

}

function rectangleBlue(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(0, 0, 255, 150);
  rect(x, y, 50, 50);

}

function drawBasicGrid(shade) {
  //draw the normal cartesian Coordinate Grid, in a light color. Spaced at 20 px by default
  stroke(shade);
  for (let x = 0; x < width; x += 20) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += 20) {
    line(0, y, width, y);
  }

  //Draw "X" at the origin
  strokeWeight(3);
  stroke(0);
  line(-5,0,5,0);
  line(0,5,0,-5);
  strokeWeight(1);
}