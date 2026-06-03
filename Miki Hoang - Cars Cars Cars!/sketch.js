// Cars Cars Cars!
// Miki Hoang
// April 1, 2026
// Woah! Rush hour is absolutely insane today! This interactive program simulates a chaotic traffic scene. Additional cars can be added and the traffic light in the top left corner can be controlled.
// The power is in your hands! Hopefully everyone will still make it to work on time...

// ---------------- GLOBAL VARIABLES ----------------
let westBound = [];
let eastBound = [];
let light;
// --------------------------------------------------


function setup() {
  createCanvas(1500, 1000);
  for(let i = 0; i < 20; i++){
    westBound.push(new Vehicle(width, random(255, 450), 1)); // y-coordinates are set within lane boundaries
    eastBound.push(new Vehicle(0, random(535, 700), 0));
  }
  light = new TrafficLight();
}


function drawRoad(){
  noStroke();
  fill("#312d3d");
  rect(0, height/4, width, height/2);

  for (let i = 0; i <= width; i+=70){ // Draws a dashed line
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
    if(this.dir === 0){
      this.x += this.speed;
    }
    else{
      this.x -= this.speed;
    }

    if(this.x > width + 300){
      this.x = 0;
    }

    if(this.x < -300){
      this.x = width;
    }
  }

  display(){
    if(this.type === 0){ // DRAWS A CAR DESIGN
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
    else if(this.type === 1 && this.dir === 0){ // DRAWS A TRUCK DESIGN
      // ---------------- EAST-FACING TRUCK ------------------
      fill(this.color);
      rect(this.x, this.y, 110, 40, 10); // Body
      fill("black");
      rect(this.x + 72, this.y + 5, 15, 30); // Window
      rect(this.x + 5, this.y + 4, 45, 32); // Truck bed

      rect(this.x + 15, this.y - 5, 13, 5); // Wheels
      rect(this.x + 15, this.y + 40, 13, 5);
      rect(this.x + 65, this.y - 5, 13, 5);
      rect(this.x + 65, this.y + 40, 13, 5);


      fill("white"); // Lights
      rect(this.x + 107, this.y + 5, 3, 5);
      rect(this.x + 107, this.y + 30, 3, 5);
    }
     
    else if(this.type === 1 && this.dir === 1){
      // ------------------- WEST-FACING TRUCK ------------------
      fill(this.color);
      rect(this.x, this.y, 110, 40, 10); // Body
      fill("black");
      rect(this.x + 23, this.y + 5, 15, 30); // Window
      rect(this.x + 60, this.y + 4, 45, 32); // Truck bed

      rect(this.x + 15, this.y - 5, 13, 5); // Wheels
      rect(this.x + 15, this.y + 40, 13, 5);
      rect(this.x + 65, this.y - 5, 13, 5);
      rect(this.x + 65, this.y + 40, 13, 5);


      fill("white"); // Lights
      rect(this.x, this.y + 5, 3, 5);
      rect(this.x, this.y + 30, 3, 5);
    }

  }

  speedUp(){
      this.speed = random(this.speed + 1, 15); // Will increase the speed of a vehicle by a random ammount between its original speed and 15
    }

  speedDown(){
    if(this.speed > 0){
      this.speed = random(this.speed - 1, 0); // Will decrease the speed of a vehicle by a random ammount between 0 and its original speed
      this.speed = max(this.speed, 0); // Prevents the speed of a vehicle from dropping below 0 and moving backwards
    }
  }

  fullStop(){
    this.speed = 0;
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

class TrafficLight{
  constructor(){
    this.color = "lime";
    this.lightTimer = 0;
  }

  display(){
    fill("#fad902");
    square(45, 45, 110, 10);
    fill(this.color);
    circle(100, 100, 80);
  }

  updateTimer(){ // Starts decreasing the timer and stops all traffic only when the light has switched to red
    if(this.color === "red"){
      this.lightTimer--;
      for(let n of westBound){
        n.fullStop();
      }
      for(let n of eastBound){
        n.fullStop();
    }
  }

    if(this.lightTimer === 0){ // Swicthes the light back to green after the timer has run out
      this.color = "lime";
    }
  }

  switchColor(){ // If the light is green, it will become red and set the timer to 120
    if(this.color === "lime"){
      this.color = "red"
      this.lightTimer = 120;
    }
  }

}

function mousePressed(){ // Shift-left-click adds new vehicles to the bottom lane, while a single left click adds new vehicles to the top lane
  if(mouseIsPressed){
    if(mouseButton === LEFT && keyIsDown(SHIFT)){
      eastBound.push(new Vehicle(0, random(535, 700), 0));
    }
    else if(mouseButton === LEFT){
      westBound.push(new Vehicle(width, random(255, 450), 1));
    }
  }
}

function keyPressed(){ // Switches the green light to red only when the spacebar is pressed
    if(key === " "){
      light.switchColor();
    }
  }

function draw() {
  background("#6b8f1d");
  drawRoad();
  
  for(let n of westBound){ // Goes through every vehicle in the array and applies the .action method to each
    n.action();
  }

   for(let n of eastBound){
    n.action();
  }
  
  light.updateTimer();
  light.display();
  
}
