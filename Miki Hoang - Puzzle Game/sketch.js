// Puzzle Game
// Miki Hoang
// April 20, 2026
// A small puzzle game where users must flip the tiles on the given board to turn all of them the same colour! The spacebar can also be used to switch the cursor and flip pattern.
// Who knew a bunch of black and white squares could be so interesting?

// 0 (black)   255 (white)

function setup() {
  createCanvas(cols*tileSize, rows*tileSize);
  randomize();
}

// ---------------- GLOBAL VARIABLES -----------------
let grid = [
  [0,   0,   0,   255,  0,  255],
  [255, 0, 255,   0,    255,  0],
  [0,   0,   0,   0,    0,  255],
  [255, 255, 255, 255,  255,  0],
  [0,   255, 0,   0,    0,  255]
];

let rows = grid.length;
let cols = grid[0].length;
let tileSize = 100;
let pattern = "Cross";
// -----------------------------------------------------

function flip(x,y){ // Switches the colour of the target tiles
  if(grid[y][x] === 0){
    grid[y][x] = 255;
  }
  else{
    grid[y][x] = 0;
  }
}

function mousePressed(){

  let x = getCurrentX();
  let y = getCurrentY();

  if(mouseX < width && mouseY < height && keyIsDown(SHIFT)){ // Only does a flip if the mouse is on the canvas
    flip(x, y); // Flips a single tile
  }
  else if(mouseX < width && mouseY < height){
    flip(x, y); // Always flips the main target tile
if(pattern === "Cross"){ // If the cursor pattern is a cross, flip the cardinal (NSEW) neighbours of the main target tile if they exist
  if(y-1 >= 0){ // NORTH
    flip(x, y-1);
  }
  if(y+1 <= 4){ // SOUTH
    flip(x, y+1);
  }
  if(x+1 <= 5){ // EAST
    flip(x+1, y);
  }
  if(x-1 >= 0){ // WEST
    flip(x-1, y);
  }
}
else{ // Flips tiles in a square pattern instead
  if(y+1 <= 4){ // SOUTH
    flip(x, y+1);
  }

  if(x+1 <= 5){ // EAST
    flip(x+1, y);
  }
  if(y+1 <= 4 && x+1 <= 5){ // SOUTH-EAST
    flip(x+1, y+1);
  }
  }
  } 
}

function renderGrid(){ // Inteprets the data stored in the 2D array (grid) and draws a matrix of squares to reflect it
  for(let y = 0; y < rows; y++){ // y: 0 1 2 3 4 5 6
    for(let x = 0; x < cols; x++){ // x: 0 1 2 3 4 5
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*tileSize, y*tileSize, tileSize);
    }
  }
}

function getCurrentX(){ // Determines the current column position of the mouse
  let constrainedX = constrain(mouseX, 0, width-1);
  return floor(constrainedX / tileSize);
}

function getCurrentY(){ // Determines the current row position of the mouse
  let constrainedY = constrain(mouseY, 0, height-1);
  return floor(constrainedY / tileSize);
}

function randomize(){ // Generates a random board arrangement every time the game is loaded
  for(let y = 0; y < rows; y++){
    for(let x = 0; x < cols; x++){
      grid[y][x] = random([0, 255]);
    }
  }
}

function checkWin(){ // Cycles through every tile in the board to check if the colour of each matches the first tile
  let firstTile = grid[0][0];
  for(let y = 0; y < rows; y++){
    for(let x = 0; x < cols; x++){
      if(grid[y][x] != firstTile){
        return;
      }
    }
  }
  fill("Red");
  textSize(50);
  text("YOU WIN!!!", 175, 250);
}

function keyPressed(){ // Switches the cursor and flip pattern when the spacebar is pressed
  if(key === " "){
    if(pattern === "Cross"){
      pattern = "Square";
    }
    else{
      pattern = "Cross";
    }
  }
}

function overlay(){ // Determines the appearance of the cursor
  let x = getCurrentX();
  let y = getCurrentY();
  fill(50, 255, 50, 150);

  if(pattern === "Cross"){
    square(x*tileSize, y*tileSize, tileSize);
    square((x + 1)*tileSize, y*tileSize, tileSize);
    square((x - 1)*tileSize, y*tileSize, tileSize);
    square(x*tileSize, (y + 1)*tileSize, tileSize);
    square(x*tileSize, (y - 1)*tileSize, tileSize);
  }
  else{
    square(x*tileSize, y*tileSize, tileSize);
    square((x + 1)*tileSize, y*tileSize, tileSize);
    square((x + 1)*tileSize, (y + 1)*tileSize, tileSize);
    square(x*tileSize, (y + 1)*tileSize, tileSize);
  }
}

function draw() {
  background(220);
  renderGrid();
  overlay();
  checkWin();
  // textSize(20);
  // fill(255,0,0);
  // text(getCurrentX()+","+getCurrentY(),mouseX, mouseY);
}