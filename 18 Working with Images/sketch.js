// Working with Images
// Miki Hoang
// April 14, 2026
// How to load images, how to play animations

let lionL, lionR;
let dir = "left";
let pinImages = [];
let current = 0; // Pinwheel current index

async function loadAssets(){
  // Load Lions
  lionL = loadImage("Assets/lion-left.png");
  lionR = loadImage("Assets/lion-right.png");

  // Pinwheel Images
  for(let i = 0; i <= 8; i++){
    pinImages.push(loadImage("assets/pin-0" + i + ".png"));
  }
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets();
  imageMode(CENTER); // Center reference images
  noCursor();
}

function draw() {
  background(220);
  lion();
  pinwheel();
}

function pinwheel(){
  image(pinImages[current], width/2, height*0.7);
  if(frameCount%3===0){
    current = (current + 1) % 9;
  }
  // ----- CANNOT ANIMATE USING FOR LOOP: ------
  // for(let i = 0; i <= 8; i++){
  //   image(pinImages[i], width/2, height * 0.7);
  // }
}

function lion(){
  // Update state variable based on mouse movement
  if(movedX < 0) dir = "left";
  else if(movedX > 0) dir = "right";

  // Interpreting the state variable
  if(dir ==="left"){
    image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);
  }
  else{
    image(lionR, mouseX, mouseY, lionL.width/2, lionL.height/2);
  }
}
