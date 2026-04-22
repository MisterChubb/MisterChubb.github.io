// Image Manipulation
// Miki Hoang
// April 22, 2026
// PART 1: Working with images and translation between 2D and 1D indices
// PART 2: Using videos

let myImage;

function preload(){
  // Called BEFORE setup. Won't conclude until all loads are complete
  myImage = loadImage("Assets/aviator.png");
}

function setup() {
  createCanvas(myImage.width, myImage.height);
  pixelDensity(1);
}

function draw() {
  background(220);
  image(myImage, 0,0);

  // Access and modify pixels on canvas
  loadPixels(); // Dumps data from canvas to array
  // boost();
  greyscale();
  updatePixels();
}

function boost(){
  // Brightening filter
  let boostAmount = map(mouseX, 0, width, -100, 100);
  for(let i = 0; i < pixels.length; i+=4){
    let r = pixels[i] + boostAmount;
    let g = pixels [i + 1] + boostAmount;
    let b = pixels [i + 2] + boostAmount;
    setPixelOneD(i, r, g, b);
  }
}

function getAvg(x,y){
  // Returns average intensity of RGB at (x,y)
  let index = ((y * width) + x) * 4;
  let r = pixels[index];
  let g = pixels[index + 1];
  let b = pixels[index + 2];
  return (r + g + b) / 3
}

function greyscale(){
  // Uses average intensity of each pixel to represent it as a shade of grey
  for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){
      let avg = getAvg(x,y);
      setPixel(x, y, avg, avg, avg);
    }
  }
}

function setPixel(x, y, r, g, b){
  // x, y --> pixel location
  // r, g, b --> colour values
  let index = ((y * width) + x) * 4;
  setPixelOneD(index, r, g, b);
}

function setPixelOneD(pos, r, g, b){
  // Pos --> 1D location of the pixel's red component
  // r, g, b --> new colour values (0-255) for the pixel
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
}
