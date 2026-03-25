// Object-Object Interactions
// Miki Hoang
// March 25, 2026

// ------ GLOBAL VARIABLES ------
let nodes = [];
let reach = 150;
// ------------------------------
function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(220);
  // If no deletions, loop by item
  for(let n of nodes){
    n.display();
  }
}


function mousePressed(){
  if(mouseButton === "center"){
    for(let i = 0; i < 50; i++){
      let x = random(-50,50);
      let y = random(-50,50);
      nodes.push(new CsNode(mouseX + x, mouseY + y));
    }
  }
  if (mouseButton === "left"){
    let n = new CsNode(mouseX, mouseY);
    nodes.push(n);
  }
}


class CsNode{
  // 1. constructor
  constructor(x,y){
    // Properties related to pos/display
    this.x = x;
    this.y = y;
    this.size = 5;
    this.c = color(random(225), random(225), random(225));

    // Properties related to movement
    this.xTime = random(100);
    this.yTime = random(100);
    this.timeShift = 0.01;
    this.maxSpeed = 5;
  }

  // 2. Class Methods
  display(){
    fill(this.c);
    noStroke();
    circle(this.x, this.y, this.size);
  }
}
