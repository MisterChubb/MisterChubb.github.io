// Cars Cars Cars!
// Miki Hoang
// April 1, 2026
// (INSERT EPIC DESCRIPTION HERE)

// ---------------- GLOBAL VARIABLES ----------------
let coolCar;
let terrificTruck;
// --------------------------------------------------


function setup() {
  createCanvas(windowWidth, windowHeight);
  coolCar = new Vehicle(0, random(0, 15))
  terrificTruck = new Vehicle(1, )
}


function drawRoad(){
  noStroke();
  fill("#1d1d2b");
  rect(0, windowHeight/4, windowWidth, windowHeight/2);

  for (let i = 0; i <= windowWidth; i+=70){ // Dashed Line
    fill("#fad902");
    rect(i, windowHeight/2, 35, 7);
  }
}


class Vehicle{
  constructor(type, speed, dir, x, y,){
    this.type = type;
    this.speed = speed;
    this.dir = dir;
    this.x = x;
    this.y = y;
    this.color = color;

  }

  move(){

  }

  display(){
    if(this.type === 0){ // Draws a car design
      fill(this.color);
      rect(this.x, this.y, 100, 50);
    }
    else{
      fill(this.color);
      
    }

  }
}





function draw() {
  background("#6b8f1d");
  drawRoad();
}
