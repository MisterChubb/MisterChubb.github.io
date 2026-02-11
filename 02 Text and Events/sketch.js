// Text and Events
// Miki Hoang 
// February 9, 2026

let textShade = 225;
let textScale = 40;
let bgcolor = "grey";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function displayMouse(){
  // Will report some system variables related to mouse onto the screen via text()
  textSize(textScale);
  fill(textShade);
  text(mouseX + ", " + mouseY + ", " + mouseIsPressed + ", " + mouseButton, mouseX, mouseY); 
  // mouseX, mouseY --> Store mouse position
  // mouseIsPressed --> boolean: button pressed?
  // Good for mouseHELD events...


  // Try using mouseIsPressed to change size
  // Because draw() runs 60 times/second, usually mouseIsPressed will be checked 4-10 times per click event
  //if(mouseIsPressed){
    //textScale = int(random(10,100)); // Randome number 10-99

  //}
}
function mousePressed(){
  // Automatically called exactly ONCE per mousePress (on down action)
  textShade = int(random(0,225))
}

function displayKeyboard(){
  // Used to inspect some of p5's keyboard capabilities
  // keyIsPressed --> Is a keyboard button pressed?
  // key          --> Last pressed key (non-coded)
  // keyCode      --> Last pressed coded key as a number

  if (keyIsPressed){
    // Good for keyHELD events
    // Something was pressed. Next, check which key/keyCode
    if(key === " "){
      bgcolor = color(random (225), random (225), random (225));
    }
  }

  textSize(30);
  textAlign (CENTER,CENTER);
  let t = keyIsPressed + ", " + key + ", " + keyCode;
  text(t, width/2, height/2)
} 

function keyPressed(){
  if(key === 65){
    bgcolor = color(random(225), random(225), random(225))
  }
}

function draw() {
  // goal: keep draw() tidy! :D
  background(bgcolor);
  //displayMouse();
  displayKeyboard();

}
