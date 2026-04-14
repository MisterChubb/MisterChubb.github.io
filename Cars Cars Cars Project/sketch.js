// Cars Cars Cars!
// Miki Hoang
// April 1, 2026
// (INSERT EPIC DESCRIPTION HERE)


function setup() {
  createCanvas(windowWidth, windowHeight);
}


function drawRoad(){
  noStroke();
  fill("#1d1d2b");
  rect(0, windowHeight/4, windowWidth, windowHeight/2);

  for (let i = 0; i <= windowWidth; i+=50){ // Dashed Line
    fill("#fad902");
    rect(i, windowHeight/2, 25, 3);
  }
}







function draw() {
  background("#6b8f1d");
  drawRoad();
}
