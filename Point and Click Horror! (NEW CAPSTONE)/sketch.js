// Point and Click Horror Game!
// Miki Hoang
// June 11, 2026
// (EPIC DESCRIPTON GOES HERE)

// ----------------------- GLOBAL VARIABLES --------------------------
let mirror = [];
let mirrorIndex = 0;
let mirrorText = [];
let pixelFont;
// -------------------------------------------------------------------
async function setup() {
  background(0);
  createCanvas(1000, 1000);
  pixelFont = await loadFont("Assets/Fonts/pixel2.ttf");

  for(let i = 1; i < 5; i ++){
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


function draw() {
  mirrorScene();
  
  for(let t of mirrorText){
    t.display();
    t.move();
  }

  if(mouseIsPressed){
    push();
    stroke(255);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
    pop();
 }
}
