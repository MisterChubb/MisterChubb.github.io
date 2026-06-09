// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let chip;
async function setup() {
  createCanvas(windowWidth, windowHeight);
  chip = await loadImage("Assets/chip.jpg");
  noLoop();
}

function draw() {
  image(chip, 0, 0);
  loadPixels();
  majorityColour();







  updatePixels();
}

function majorityColour() {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (x < 300) {
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
}


// HELPER FUNCTIONS
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
