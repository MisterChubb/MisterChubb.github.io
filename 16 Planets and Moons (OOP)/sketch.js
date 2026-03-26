// Planets and Moons
// Miki Hoang
// March 26, 2026

// ------ GLOBAL VARIABLES -------
let myPlanet;
// -------------------------------


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background("#0b0e36");
  myPlanet.display();
}

function mousePressed(){
  // Regular click: adds moon
  // SHIFT click: Destroys and resets moon
  if(keyIsPressed && keyCode === SHIFT){
    myPlanet = new Planet (width/2, height/2);
  }
  else myPlanet.createMoon();
}

function keyPressed(){
  if(keyCode !== SHIFT){
    myPlanet.x = mouseX;
    myPlanet.y = mouseY;
  }
}

class Planet{
  // Constructor
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.s = 100;
    this.moons = [];
  }

  // Class methods
  createMoon(){
    this.moons.push(new Moon());
  }

  display(){
    // Draw the planet and all of its moons
    fill("#631849");
    circle(this.x, this.y, this.s);

    // For the moons
    for(let m of this.moons){
      m.update(this.x, this.y);
      
    }
  }
}

class Moon{
  constructor(){
    this.speed = random(1,5); // Angular speed
    this.angle = 0;
    this.orbitRadius = random(100,200);
    this.s = random(10,50);
  }

  // Class methods
  move(){
    this.angle += this.speed;
  }

  display(x,y){
    push();
    translate(x,y);
    rotate(this.angle);
    fill("#b6c6db");
    circle(this.orbitRadius, 0, this.s);
    pop();
  }

  update(x,y){
    // Helper method to handle all internal method calls
    this.move();
    this.display(x,y);

  }
}
