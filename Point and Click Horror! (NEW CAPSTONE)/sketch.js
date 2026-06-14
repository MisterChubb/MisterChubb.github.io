// Point and Click Horror Game!
// Miki Hoang
// June 11, 2026
// (EPIC DESCRIPTON GOES HERE)

// ----------------------- GLOBAL VARIABLES --------------------------
let handCursor;

let painting;
let painting2;
let paintingState = 0;
let roach;
let roach2;
let spawnRoaches = [];

let mirror = [];
let mirrorIndex = 0;
let mirrorText = [];
let pixelFont;
// -------------------------------------------------------------------
async function setup() {
  createCanvas(1000, 1000);
  noCursor();
  pixelFont = await loadFont("Assets/Fonts/pixel2.ttf"); // Load new font
  handCursor = await loadImage("Assets/cursor.PNG");



  painting = await loadImage("Assets/Roach_Puzzle/painting.PNG");
  painting2 = await loadImage("Assets/Roach_Puzzle/painting2.PNG");
  roach = await loadImage("Assets/Roach_Puzzle/roach.PNG");
  roach2 = await loadImage("Assets/Roach_Puzzle/roach2.PNG");

  for(let i = 0; i < 9; i ++){ 
    spawnRoaches.push(new Roaches());
  }


  for(let i = 1; i < 5; i ++){ // Load mirror scene animation images
    mirror.push(await loadImage("Assets/Mirror_Scene/Mirror" + i + ".PNG"));
  }

  for(let i = 0; i < 5; i++){
    mirrorText.push(new FloatText());
  }
}


function mirrorScene(){
  image(mirror[mirrorIndex], 0, 0);
  if(frameCount % 12 === 0){
    mirrorIndex += 1;
    if(mirrorIndex > 3){
      mirrorIndex = 0;
    }
  }

  for(let t of mirrorText){
    t.display();
    t.move();
  }
}

function roachPuzzle(){
  if(paintingState === 0){
    image(painting, 0, 0);
  }
  if(mouseIsPressed && mouseX >= 150 && mouseX <= 850 && mouseY >= 75 && mouseY <= 900){
    paintingState = 1;
  }
  if(paintingState === 1){
    image(painting2, 0, 0);
  }

  for(let r of spawnRoaches){
    r.display();
    r.move();
  }
}


class FloatText{
  constructor(){
    this.x = random(1000);
    this.y = random(1000);
    this.size = random(25, 100);
    this.speedX = random(-5, 5); 
    this.speedY = random(-5, 5);    
  }

  display(){
    fill(255);
    textFont(pixelFont);
    textSize(this.size);
    text("Who am I?", this.x, this.y);
  }
  move(){
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > width) this.x = 0;
    if (this.x < 0) this.x = width;
    if (this.y > height) this.y = 0;
    if (this.y < 0) this.y = height;
  }
}

class Roaches{
  constructor(){
    this.x = random(350, 550);
    this.y = 400;
    this.sizeW = 100;
    this.sizeH = 100;
    this.speedX = random(-7, 7); 
    this.speedY = random(-7, 7);
    this.state = 0;
  }
  display(){
    if(paintingState === 1){
      if(this.state === 0){
        image(roach, this.x, this.y, this.sizeW, this.sizeH);
      }
      if(mouseIsPressed && mouseX >= this.x && mouseX <= this.x + this.sizeW + 7 && mouseY >= this.y && mouseY <= this.y + this.sizeH + 7){
        this.switchState();
        this.stop();
      }
      if(this.state === 1){
        image(roach2, this.x, this.y, this.sizeW, this.sizeH);
      }
    }
  }
  move(){
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > width) this.x = 0;
    if (this.x < 0) this.x = width;
    if (this.y > height) this.y = 0;
    if (this.y < 0) this.y = height;
  }
  switchState(){
      this.state = 1;
  }
  stop(){
    this.speedX = 0;
    this.speedY = 0;
  }
}

function draw() {
  background(0);
  // mirrorScene();
  roachPuzzle();
  image(handCursor, mouseX, mouseY, 100, 100);
}
