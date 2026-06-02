// Cars Cars Cars!
// Miki Hoang
// April 1, 2026
// (INSERT EPIC DESCRIPTION HERE)

// ---------------- GLOBAL VARIABLES ----------------
let westBound = [];
let eastBound = [];
// --------------------------------------------------


function setup() {
  createCanvas(800, 600);
  for(let i = 0; i < 20; i++){
    westBound.push(new Vehicle(0, random(150, 275), 1));
    eastBound.push(new Vehicle(width, random(300, 425), 0));
  }
}


function drawRoad(){
  noStroke();
  fill("#312d3d");
  rect(0, height/4, width, height/2);

  for (let i = 0; i <= width; i+=70){ // Dashed Line
    fill("#fad902");
    rect(i, height/2, 35, 5);
  }
}


class Vehicle{
  constructor(x, y, dir){
    this.type = random([0, 1]);
    this.speed = random(0, 15);
    this.dir = dir;
    this.x = x;
    this.y = y;
    this.color = color(random(255), random(255), random(255));

  }

  move(){
    if(this.dir === 0){ // East
      this.x += this.speed;
    }
    else{
      this.x -= this.speed;
    }

    if(this.x > width + 35){
      this.x = 0;
    }

    if(this.x < -35){
      this.x = width;
    }
  }

  display(){
    if(this.type === 0){ // Draws a car design
      fill(this.color);
      rect(this.x, this.y, 35, 20);

      // fill("black");
      // rect(this.x, this.y - 15, 15, 15);
      // rect(this.x, this.y + 50, 15, 15);
      // rect(this.x + 60, this.y - 15, 15, 15);
      // rect(this.x + 60, this.y + 50, 15, 15);
    }
    else{ // Draws a truck design
      fill(this.color);
      rect(this.x, this.y, 35, 20);
      
    }

  }

  speedUp(){
      this.speed = random(this.speed + 1, 15);
    }

  speedDown(){
    if(this.speed >= 0){
      this.speed = random(this.speed - 1, 0);
    }
  }

  changeColor(){
    this.color = color(random(255), random(255), random(255));
  }

  action(){
    this.display();
    this.move();

    if(random() < 0.01){
      this.speedUp();
    }

    if(random() < 0.01){
      this.speedDown();
    }

    if(random() < 0.01){
      this.changeColor();
    }

  }
}





function draw() {
  background("#6b8f1d");
  drawRoad();

  for(let n of westBound){
    n.action();
  }

   for(let n of eastBound){
    n.action();
  }
}
