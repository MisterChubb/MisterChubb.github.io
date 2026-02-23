// Stae Variables and Real Time
// Miki Hoang
// February 23, 2026

// Global Variables
let shapeState = 0; //0:circle    1:Square    2:Triangle    3:Starburst

let startTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis();
}


function draw() {
  background(220);
  drawShape();
  manageTime();
}


function manageTime(){
  // Will reset timer and update shapeState once every 2000 milliseconds
  let elapsedTime = millis() - startTime;
  if(elapsedTime > 1000){
    updateState();
    startTime = millis();
  }
}

function keyPressed(){
  shapeState++;
  if (shapeState > 3) shapeState = 0
}

function updateState(){
  shapeState++;
  if (shapeState > 3) shapeState = 0;
}

function drawShape(){
  // Inspects the shapeState variable and draws the appropriate shape on the canvas
  let x = width/2;
  let y = height/2;
  switch (shapeState){
    case 0:
      circle (x, y, 150);
      break;
    case 1:
      circle (x, y, 150);
      break;
    case 2:
      triangle (x-50, y+50, x+50, y+50, x, y-25);
      break;
    case 3:
      for (let i = 0; i < 30; i++){
        let x2 = random (x-80, x+80);
        let y2 = random (y-80, y+80);
        line (x, y, x2, y2);
      }
      break;
  }
}