// Image Manipulation Exercises
// Miki Hoang
// June 9, 2026
// A program that runs a variety of image filters! Images and functions can be commented out as needed.

// -------------------- GLOBAL VARIABLES ---------------------
let chip;
let steve;
let hackersMovie;
let lopan;
// -----------------------------------------------------------

async function setup() {
  createCanvas(windowWidth, windowHeight);
  chip = await loadImage("Assets/chip.jpg");
  steve = await loadImage("Assets/steve.png");
  hackersMovie = await loadImage("Assets/hackers_movie.png");
  lopan = await loadImage("Assets/lopan.png");
  noLoop();
}

function majorityColour() {
  for (let x = 0; x < width; x++) { // Cycles through every pixel in the image
    for (let y = 0; y < height; y++) {
        let index = ((y * width) + x) * 4;
        let r = pixels[index];
        let g = pixels[index + 1];
        let b = pixels[index + 2];

        if (r > g && r > b) {
          setPixel(x, y, 255, 0, 0);
        }
        else if (g > r && g > b) {
          setPixel(x, y, 0, 255, 0);
        }
        else {
          setPixel(x, y, 0, 0, 255);
        }
    }
  }
}

function noGreen(){
   for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (x > steve.width/2) {
        let index = ((y * width) + x) * 4;
        let r = pixels[index];
        let g = pixels[index + 1];
        let b = pixels[index + 2];
        setPixel(x, y, r, 0, b);
      }

    }
  }
}

function posterize(){
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let avg = getAvg(x,y);
      if(avg >= 205 && avg <= 255){
        setPixel(x, y, 170, 230, 220);
      }
      else if(avg >= 155 && avg <= 204){
        setPixel(x, y, 105, 150, 210);
      }
      else if(avg >= 105 && avg <= 154){
        setPixel(x, y, 120, 180, 60);
      }
      else if(avg >= 55 && avg <= 104){
        setPixel(x, y, 130, 30, 130);
      }
      else if(avg >= 0 && avg <= 54){
        setPixel(x, y, 90, 10, 50);
      }
    }
  }
}

function horizMirror(){
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if(x > lopan.width/2){
        let index = ((y * width) + x) * 4;
        let r = pixels[index];
        let g = pixels[index + 1];
        let b = pixels[index + 2];
        setPixel(lopan.width - x, y, r, g, b);
      }
    }
  }
}

// --------------------- HELPER FUNCTIONS ------------------------
function getAvg(x, y) {
  // Returns average intensity of RGB at (x,y)
  let index = ((y * width) + x) * 4;
  let r = pixels[index];
  let g = pixels[index + 1];
  let b = pixels[index + 2];
  return (r + g + b) / 3
}

function setPixel(x, y, r, g, b) {
  // x, y --> pixel location
  // r, g, b --> colour values
  let index = ((y * width) + x) * 4;
  setPixelOneD(index, r, g, b);
}

function setPixelOneD(pos, r, g, b) {
  // Pos --> 1D location of the pixel's red component
  // r, g, b --> new colour values (0-255) for the pixel
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
}
// ------------------------------------------------------------------

function draw() {
  // image(chip, 0, 0);
  // image(steve, 0, 0);
  // image(hackersMovie, 0, 0);
  image(lopan, 0, 0);
  loadPixels();
  // majorityColour();
  // noGreen();
  // posterize();
  horizMirror();
  updatePixels();
}
