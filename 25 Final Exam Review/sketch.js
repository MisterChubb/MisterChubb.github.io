// Final Exam Review
// Miki Hoang
// June 10, 2026


let gorillaIdle = [];
let gorillaSwipe = [];
let spiralImages = [];

// GORILLA
let gorillaState = 0; // 0: Idle     1: Swipe
let idleIndex = 0;
let swipeIndex = 0;
let gorillaX = 200;

// SPIRAL
let spirals = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
  // SPIRAL
  for(let i = 0; i < 16; i++){
    if(i < 10){
      spiralImages.push(await loadImage("Assets/Circle/circle0" + i + ".png"));
    }
    else{
      spiralImages.push(await loadImage("Assets/Circle/circle" + i + ".png"));
    }
  }

  // GORILLA
  for(let i = 1; i <= 6; i++){
    gorillaIdle.push(await loadImage("Assets/Gorilla/idle" + i + ".png"));
    gorillaSwipe.push(await loadImage("Assets/Gorilla/swipe" + i + ".png"));
  }

}

function draw() {
  background(0);
  // GORILLA CODE
  if(gorillaState === 0){
    image(gorillaIdle[idleIndex], gorillaX, 200);
    if(frameCount % 10 === 0){
      idleIndex += 1;
      if(idleIndex > 5){
        idleIndex = 0;
      }
    }
  }
  else if(gorillaState === 1){
    image(gorillaSwipe[swipeIndex], gorillaX, 200);
    if(frameCount % 5 === 0){
      swipeIndex += 1;
      if(swipeIndex > 5){
        swipeIndex = 0;
      }
    }
  }

  // SMOOTH GORILLA MOVEMENT
  if(keyIsPressed && keyCode === 39){
    gorillaX += 5;
  }
  else if(keyIsPressed && keyCode === 37){
    gorillaX -= 5;
  }

  // SPIRAL CODE
  // for(let s of spirals){ // Loops by item - not easy to delete
  //   s.display();
  // }

  for(let i = 0; i < spirals.length; i++){
    let s = spirals[i];
    s.display();

    if(s.active === false){
      spirals.splice(i, 1);
      i--; // Rewind i onew step, to follow shifting items
    }
  }
}

function mousePressed(){
  spirals.push(new Spiral(mouseX, mouseY));
}

function keyPressed(){
  if(keyCode === 37){ // LEFT ARROW NUMBER CODE
    gorillaX -= 5;
  }
}

class Spiral{ // Frames 0, 1, 2....., 15
  constructor(x, y){
    this.pos = createVector(x, y);
    this.frame = 0;
    this.active = true; // For deletion purposes
  }

  // Class Methods
  display(){
    if(this.frame > 15){
      this.active = false;
    }
    else{
      image(spiralImages[this.frame], this.pos.x, this.pos.y);
      if(frameCount % 3 === 0){
        this.frame++;
      }
    }
  }
}
