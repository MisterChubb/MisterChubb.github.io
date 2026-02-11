// Basics of Coordinate Systems
// Miki Hoang
// February 5, 2026


// In python, we wrote "run-to-completeion"
//                     (Start at top, end at bottom)


// In p5.js, we write "interacive"
//    setup()-> Runs once, at the start
//    darw() -> Runs over and over (after setup)
//                  Targeting 60 times per second
//              Screen is updated at bottom of draw

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0); // Wipes the screen

  //      x   y  dia
  circle(0, 0, 50);
}
