// External Libraries
// Miki Hoang
// May 8, 2026

let gui, b;

function setup() {
  createCanvas(300,300);
  gui = createGui();
  b = createButton("myButton", 50,50);
}

function draw() {
  background(220);
  drawGui();
  if(b.isPressed){
    print(b.label + " is pressed.");
  }
}
