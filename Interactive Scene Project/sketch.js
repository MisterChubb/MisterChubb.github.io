// Interactive Scene Project (Rename Later)
// Miki Hoang
// February 11, 2026

// (Short Description Goes Here)


function setup() {
  createCanvas(900, 900);
}

function oceanBG(){
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

  fill("#1d4d10"); // Dark Seaweed (Left)
  triangle(195, 700, 200, 750, 180, 900);

  fill("#31731f"); // Medium Seaweed (Left)
  triangle(200, 780, 230, 750, 170, 900);

  fill("#6bc253"); // Light Seaweed (Left)
  triangle(150, 650, 180, 750, 190, 930);



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
  circle(850, 900, 250);
  circle(700, 900, 190);
  circle(600, 900, 65);
  ellipse(550, 900, 100, 30);



  fill("#8caddb"); // Bubbles!
  circle(100, 200, 90); 
  circle(200, 350, 50);
  circle(800, 400, 130);
  circle(800, 160, 70);
  circle(650, 250, 30);
  fill("#b5d0f5");
  circle(110, 180, 30);
  circle(205, 340, 15);
  circle(790, 370, 50);
  circle(790, 145, 25);
  circle(645, 245, 10);


}

function fishDiamond(){
  noStroke();
  fill("#dbfc05");
  triangle(320, 450, 360, 420, 360, 480);
  fill("#eb09d4");
  quad(340, 450, 250, 400, 200, 450, 250, 470);
  fill("#dbfc05");
  triangle(255, 435, 285, 445, 270, 430);
  triangle(250, 470, 250, 400, 200, 450);
  fill("#f5fcc7");
  circle(235, 440, 20);
  fill("#52024a");
  circle(235, 440, 13);
}

function draw() {
  oceanBG();
  fishDiamond();
}
