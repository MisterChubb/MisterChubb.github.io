// Cars Cars Cars!
// Miki Hoang
// April 1, 2026
// (INSERT EPIC DESCRIPTION HERE)

// ---------------- GLOBAL VARIABLES ----------------
let westBound = [];
let eastBound = [];
// --------------------------------------------------


function setup() {
  createCanvas(1500, 1000);
  for(let i = 0; i < 5; i++){
    westBound.push(new Vehicle(0, random(255, 470), 1));
    eastBound.push(new Vehicle(width, random(535, 700), 0));
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
      rect(this.x, this.y, 75, 30, 5); // Body

      fill("black");
      rect(this.x + 15, this.y + 5, 10, 20); // Windows
      rect(this.x + 50, this.y + 5, 10, 20);

      rect(this.x + 10, this.y - 5, 10, 5); // Wheels
      rect(this.x + 10, this.y + 30, 10, 5);
      rect(this.x + 55, this.y - 5, 10, 5);
      rect(this.x + 55, this.y + 30, 10, 5);


      fill("white"); // Lights
      rect(this.x, this.y + 2, 3, 5);
      rect(this.x, this.y + 22, 3, 5);
      rect(this.x + 72, this.y + 22, 3, 5);
      rect(this.x + 72, this.y + 2, 3, 5);
    }
    else if(this.type === 1 && this.dir === 0){ // Draws a truck design
      fill(this.color); // Replace with this.color
      rect(this.x, this.y, 110, 40, 10); // replace all 100's with this.x and this.y
      fill("black");
      rect(this.x + 72, this.y + 5, 15, 30); // Window
      rect(this.x + 5, this.y + 4, 45, 32); // Truck bed

      rect(this.x + 15, this.y - 5, 13, 5); // Wheels
      rect(this.x + 15, this.y + 40, 13, 5);
      rect(this.x + 65, this.y - 5, 13, 5);
      rect(this.x + 65, this.y + 40, 13, 5);


      fill("white");
      rect(this.x + 107, this.y + 5, 3, 5);
      rect(this.x + 107, this.y + 30, 3, 5);
    }

    else if(this.type === 1 && this.dir === 1){
      fill(this.color); // Replace with this.color
      rect(this.x, this.y, 110, 40, 10); // replace all 100's with this.x and this.y
      fill("black");
      rect(this.x + 23, this.y + 5, 15, 30); // Window
      rect(this.x + 60, this.y + 4, 45, 32); // Truck bed

      rect(this.x + 15, this.y - 5, 13, 5); // Wheels
      rect(this.x + 15, this.y + 40, 13, 5);
      rect(this.x + 65, this.y - 5, 13, 5);
      rect(this.x + 65, this.y + 40, 13, 5);


      fill("white");
      rect(this.x, this.y + 5, 3, 5);
      rect(this.x, this.y + 30, 3, 5);
    }

  }

  speedUp(){
      this.speed = random(this.speed + 1, 15);
    }

  speedDown(){
    if(this.speed > 0){
      this.speed = random(this.speed - 1, 0);
      this.speed = max(this.speed, 0);
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
