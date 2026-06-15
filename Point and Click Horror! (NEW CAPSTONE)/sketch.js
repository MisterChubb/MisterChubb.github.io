// Point and Click Horror Game!
// Miki Hoang
// June 11, 2026
// (EPIC DESCRIPTON GOES HERE)

// ----------------------- GLOBAL VARIABLES --------------------------
let handCursor;
let pixelFont;

// MIRROR SCENE VARIABLES
let mirror = [];
let mirrorIndex = 0;
let mirrorText = [];

// PAINTING & ROACH PUZZLE VARIABLES
let painting;
let painting2;
let paintingState = 0; // 0: Mr. Scott Portrait (painting)    1: Hole with roaches (painting2)
let roach;
let roach2;
let spawnRoaches = [];

let windowClosed;
let windowState = 0;
let windowAni = [];
let windowIndex = 0;
let grid = [
  [255, 0, 0, 0, 0, 255],
  [255, 255, 255, 255, 0, 255],
  [255, 255, 255, 0, 255, 255],
  [255, 255, 0, 255, 255, 255],
  [255, 0, 255, 255, 255, 255]
];
let overlayGrid = [
  [255, 255, 255, 255, 255, 255],
  [255, 255, 255, 255, 255, 255],
  [255, 255, 255, 255, 255, 255],
  [255, 255, 255, 255, 255, 255],
  [255, 255, 255, 255, 255, 255]
];
let rows = overlayGrid.length;
let cols = overlayGrid[0].length;
let tileSize = 50;
let faceLayer;
// -------------------------------------------------------------------
async function setup() {
  createCanvas(1000, 1000);
  noCursor();
  pixelFont = await loadFont("Assets/Fonts/pixel2.ttf"); // Load new font
  handCursor = await loadImage("Assets/cursor.PNG");
  faceLayer = createGraphics(width, height);


  painting = await loadImage("Assets/Roach_Puzzle/painting.PNG");
  painting2 = await loadImage("Assets/Roach_Puzzle/painting2.PNG");
  roach = await loadImage("Assets/Roach_Puzzle/roach.PNG");
  roach2 = await loadImage("Assets/Roach_Puzzle/roach2.PNG");




  for (let i = 1; i < 5; i++) { // Load mirror scene animation images
    mirror.push(await loadImage("Assets/Mirror_Scene/Mirror" + i + ".PNG"));
  }

  for (let i = 0; i < 5; i++) {
    mirrorText.push(new FloatText());
  }

  windowClosed = await loadImage("Assets/Window_Puzzle/window.PNG");
  for (let i = 2; i < 5; i++) {
    windowAni.push(await loadImage("Assets/Window_Puzzle/window" + i + ".PNG"));
  }
}


function mirrorScene() {
  image(mirror[mirrorIndex], 0, 0);
  if (frameCount % 12 === 0) {
    mirrorIndex += 1;
    if (mirrorIndex > 3) {
      mirrorIndex = 0;
    }
  }

  for (let t of mirrorText) {
    t.display();
    t.move();
  }
  if (mouseIsPressed) {
    stroke(255);
    strokeWeight(30);
    faceLayer.line(mouseX, mouseY, pmouseX, pmouseY);
  }
  image(faceLayer, 0, 0);
  strokeWeight(1);
}

function roachPuzzle() {
  if (paintingState === 0) {
    image(painting, 0, 0);
  }
  if (mouseIsPressed && paintingState === 0 && mouseX >= 150 && mouseX <= 850 && mouseY >= 75 && mouseY <= 900) {
    paintingState = 1;
    for (let i = 0; i < 9; i++) {
      spawnRoaches.push(new Roaches());
    }
  }
  if (paintingState === 1) {
    image(painting2, 0, 0);
  }

  for (let r of spawnRoaches) {
    r.display();
    r.move();
  }
}




function inWindow(){
 if(mouseX > 517 && mouseX < 816 && mouseY > 185 && mouseY < 426 ){
  return true;
 }
 else{
  return false;
 }
}
function windowScene() {
  
  if (windowState === 0) {
    image(windowClosed, 0, 0);
  }
  if (mouseIsPressed) {
    windowState = 1;
  }
  if (windowState === 1) {
    image(windowAni[windowIndex], 0, 0);
    if (frameCount % 25 === 0) {
      windowIndex += 1;
      if (windowIndex > 2) {
        windowIndex = 0;
      }
    }
    windowPuzzle();
  }
}

function windowPuzzle() {
  let x = getCurrentX();
  let y = getCurrentY();
// print(x,y);
  // RENDER GRID
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let fillColor = overlayGrid[y][x];
      fill(fillColor);
      square(530 + (x * tileSize), 185 + (y * tileSize), tileSize);
    }
  }
  // FLIP TILES
  if (mouseIsPressed && inWindow() && windowState === 1) {
    if (grid[y][x] === 0) {
      overlayGrid[y][x] = 0;
    }
    else if (grid[y][x] === 255) {
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          overlayGrid[y][x] = 255;
        }
      }
    }
  }
}

function getCurrentX() { // Determines the current column position of the mouse
  let constrainedX = constrain(mouseX - 530, 0, width - 1);
  return floor(constrainedX / tileSize);
}

function getCurrentY() { // Determines the current row position of the mouse
  let constrainedY = constrain(mouseY - 185, 0, height - 1);
  return floor(constrainedY / tileSize);
}

class FloatText {
  constructor() {
    this.x = random(1000);
    this.y = random(1000);
    this.size = random(25, 100);
    this.speedX = random(-5, 5);
    this.speedY = random(-5, 5);
  }

  display() {
    fill(255);
    textFont(pixelFont);
    textSize(this.size);
    text("Who am I?", this.x, this.y);
  }
  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }
    if (this.y > height) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = height;
    }
  }
}

class Roaches {
  constructor() {
    this.x = 500;
    this.y = 500;
    this.sizeW = 100;
    this.sizeH = 100;
    this.speedX = random(-7, 7);
    this.speedY = random(-7, 7);
    this.state = 0;
  }
  display() {
    if (paintingState === 1) {
      if (this.state === 0) {
        image(roach, this.x, this.y, this.sizeW, this.sizeH);
      }
      if (mouseIsPressed && mouseX >= this.x && mouseX <= this.x + this.sizeW + 3 && mouseY >= this.y && mouseY <= this.y + this.sizeH + 3) {
        this.switchState();
        this.stop();
      }
      if (this.state === 1) {
        image(roach2, this.x, this.y, this.sizeW, this.sizeH);
      }
    }
  }
  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > width + 100) {
      this.x = 0;
    }
    if (this.x < 0 - 100) {
      this.x = width;
    }
    if (this.y > height + 100) {
      this.y = 0;
    }
    if (this.y < 0 - 100) {
      this.y = height;
    }
  }
  switchState() {
    this.state = 1;
  }
  stop() {
    this.speedX = 0;
    this.speedY = 0;
  }
}

function draw() {
  background(0);
  mirrorScene();
  // roachPuzzle();
  // windowScene();
  image(handCursor, mouseX, mouseY, 100, 100);
}
