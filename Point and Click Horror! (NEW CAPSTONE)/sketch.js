// Point and Click Horror Game!
// Miki Hoang
// June 11, 2026
// (EPIC DESCRIPTON GOES HERE)

// ----------------------- GLOBAL VARIABLES --------------------------
let mirror = [];
let mirrorIndex = 0;
// -------------------------------------------------------------------
async function setup() {
  createCanvas(windowWidth, windowHeight);

  for(let i = 1; i < 5; i ++){
    mirror.push(await loadImage("Assets/Mirror_Scene/Mirror" + i + ".png"));
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


function draw() {
  background(220);
  mirrorScene();
}
