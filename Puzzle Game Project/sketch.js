// Puzzle Game
// Miki Hoang
// April 20, 2026
//(EPIC DESCRPTION GOES HERE)

// 0 (black)   255 (white)

function setup() {
  createCanvas(cols*tileSize, rows*tileSize);
  randomize();
}

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

function flip(x,y){
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

  //only do a flip if mouse is on the Canvas
  if(mouseX < width && mouseY < height && keyIsDown(SHIFT)){ // Flips a single tile
    flip(x, y);
  }
  else if(mouseX < width && mouseY < height){

    // ALWAYS:
    flip(x, y); // Always flips the main target tile

    // IF THEY EXIST:
    // flip the cardinal (NSEW) neighbours
if(pattern === "Cross"){
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
else{
  if(y+1 <= 4){ // SOUTH
    flip(x, y+1);
  }

  if(x+1 <= 5){ // EAST
    flip(x+1, y);
  }

  if(y+1 <= 4 && x+1 <= 5){
    flip(x+1, y+1);
  }
}
    
  } 
}

function renderGrid(){
  // intepret the data stored in 2D array (grid) and
  // draw a matrix of squares to reflect it
  for(let y = 0; y < rows; y++){ //y:0 1 2 3 4
    for(let x = 0; x < cols; x++){ //x: 0 1 2 3 4 5
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*tileSize, y*tileSize, tileSize);
    }
  }
}

function getCurrentX(){
  //determine the current col position of mouse
  let constrainedX = constrain(mouseX, 0, width-1);
  return floor(constrainedX / tileSize);
}

function getCurrentY(){
  //determine the current row position of mouse
  let constrainedY = constrain(mouseY, 0, height-1);
  return floor(constrainedY / tileSize);
}

function checkWin(){
  let firstTile = grid[0][0];
  for(let y = 0; y < rows; y++){ //y:0 1 2 3 4
    for(let x = 0; x < cols; x++){ //x: 0 1 2 3 4 5
      if(grid[y][x] != firstTile){
        return;
      }
    }
  }
  fill("Red");
  text("YOU WIN!!!", 50, 50);
}

function randomize(){
  for(let y = 0; y < rows; y++){ //y:0 1 2 3 4
    for(let x = 0; x < cols; x++){ //x: 0 1 2 3 4 5
      grid[y][x] = random([0, 255]);
    }
  }
}

function overlay(){
  let x = getCurrentX();
  let y = getCurrentY();
  fill(0, 150, 220, 150);

  if(pattern === "Cross"){
    square(x*tileSize, y*tileSize, tileSize);
    square((x + 1)*tileSize, y*tileSize, tileSize);
  }
  else{
    
  }
  
}

function draw() {
  background(220);
  renderGrid();
  checkWin();
  overlay();
  textSize(20);
  fill(255,0,0);
  text(getCurrentX()+","+getCurrentY(),mouseX, mouseY);
}