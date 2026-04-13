// Vectors Practice
// Miki Hoang
// April 13, 2026
// Useful for modeling forces...

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  // Create objects
  if(mouseIsPressed){
    objects.push(new Ball(mouseX, mouseY));
  }

  // Process Objects
  for (let o of objects){
    if(keyIsDown(32)){
      o.move();
    }
    o.display();
  }
}

class Ball{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(random(-5,5), -5);
    this.force = createVector(0,0.2); //GRAV
  }

  calcMouse(){
    // Mouse vector "attraction" calculations
    this.force = createVector(mouseX, mouseY);
    this.force.sub(this.pos);
    this.force.normalize(); // Set hyp to 1
    this.force.mult(4);
  }

  move(){
    // Update velocity and position vectors
    this.vel.add(this.force);
    this.vel.limit(20); // Can't go outside -20 and 20
    this.pos.add(this.vel);

    // Wall Bounce
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.x *= -1;
    }

    // Floor Bounce
    if(this.pos.y > height){
      this.vel.y *= -0.9;
    }
  }

  display(){
    // Display the ball
    fill("Lime");
    circle(this.pos.x, this.pos.y, 20);

    // Display Vectors
    if(false ){
      strokes(255,0,0);
      line(0,0,this.pos.x,this.pos.y);

      let endX = this.pos.x + this.vel.x;
      let endY = this.pos.y + this.vel.y;

      stroke(0,0,255);
      line(this.pos.x, this.pos.y, endX, endY);

      stroke(0,255,0);
      line(endX, endY, endX + this.force.x, endY + this.force.y);
    }
  }
}
