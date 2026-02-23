// Interactive Scene Project (Rename Later)
// Miki Hoang
// February 11, 2026

// (Short Description Goes Here)


function setup() {
  createCanvas(900, 900);
}

function aqauriumBG1(){
  background("#51719e");
  noStroke();

  fill("#876a31"); // Sand
  rect(0, 870, 900, 500);

  fill("#1d4d10"); // Dark Seaweed (Right)
  triangle(600, 400, 630, 700, 750, 900);

  fill("#31731f"); // Medium Seaweed (Right)
  triangle(700, 600, 730, 500, 720, 900);

  fill("#6bc253"); // Light Seaweed (Right)
  triangle(730, 650, 780, 600, 720, 930);




  fill("#6bc253"); // Light Seaweed (Left)
  triangle(120, 600, 200, 700, 190, 930);

  fill("#2F4F4F"); // Dark Rocks
  circle(90, 870, 200);
  circle(200, 880, 100);
  circle(900, 870, 400);
  circle(700, 870, 200);
  circle(600, 880, 75);

  fill("#638a8a"); // Light Rocks
  circle(50, 900, 170);
  circle(150, 900, 90);
  circle(200, 900, 40);
  


}


function draw() {
  aqauriumBG1();
}
