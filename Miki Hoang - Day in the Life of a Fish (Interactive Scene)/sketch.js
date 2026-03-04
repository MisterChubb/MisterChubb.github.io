// Day in the Life of a Fish (Interactive Scene)
// Miki Hoang
// February 11, 2026

// It's time to live out your new life as a fish! This is an interactive program where a player can use their mouse cursor to swim around a vast ocean. The "F" key will change the appearance of
// the fish, while the middle mouse button will change the appearance of the ocean.



// ----------- GLOBAL VARIABLES ------------
let fishType = fishDiamond
let currentBack = 0
let bgColour = "#51719e"
// -----------------------------------------



function setup() {
  createCanvas(900, 900);
}



function artistMark(){
  text("Miki Hoang", 750, 880);
  textSize(24);
  textFont("Serif");
}



function oceanBG(){
  background(bgColour);
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



function fishSquare(){ // Draws a pixel fish!
  fill("#6afa02"); // Tail
  square(mouseX + 140, mouseY + 30, 30);
  square(mouseX + 170, mouseY + 10, 30);
  square(mouseX + 170, mouseY + 50, 30);

  fill("#fa0202"); // Body and Antenna
  rect(mouseX, mouseY, 150, 100);
  rect(mouseX + 20, mouseY - 50, 10, 100);
  rect(mouseX - 30, mouseY - 50, 50, 10);
  rect(mouseX - 30, mouseY - 50, 10, 30);

  fill("#6afa02"); // Face and Fin
  rect(mouseX, mouseY, 60, 100);
  rect(mouseX + 70, mouseY + 40, 30, 20);

   fill("#e3fad2"); // Eye White and Bulb
  square(mouseX + 10, mouseY + 30, 30);
  square(mouseX - 35, mouseY - 20, 20);

  fill("#0d1c01"); // Pupil
  square(mouseX + 15, mouseY + 35, 20);
}



function fishCircle(){ // Draws a round fish!
  fill("#0a21f5"); // Tail and Top Fin
  circle(mouseX + 120, mouseY - 30, 70);
  circle(mouseX + 120, mouseY + 20, 70);
  circle(mouseX, mouseY - 60, 100);

  fill("#0af5dd"); // Body
  ellipse(mouseX, mouseY, 200, 150);

  fill("#0a21f5"); // Face
  circle(mouseX - 30, mouseY, 145);

  fill("#f0f1fc"); // Eye White
  circle(mouseX - 50, mouseY, 50);

  fill("#01031a"); // Pupil
  circle(mouseX - 50, mouseY, 35);
}



function fishDiamond(){ // Draws a geometric fish!
  fill("#dbfc05"); // Tail
  triangle(mouseX + 120, mouseY, mouseX + 160, mouseY + 30, mouseX + 160, mouseY - 30);

  fill("#eb09d4"); // Body
  quad(mouseX + 140, mouseY, mouseX + 50, mouseY - 50, mouseX, mouseY, mouseX + 50, mouseY + 20);

  fill("#dbfc05"); // Fin and Face
  triangle(mouseX + 55, mouseY - 15, mouseX + 85, mouseY - 5, mouseX + 70, mouseY - 20);
  triangle(mouseX + 50, mouseY + 20, mouseX + 50, mouseY - 50, mouseX, mouseY);

  fill("#faf8f7"); // Eye White
  circle(mouseX + 35, mouseY - 10, 20);

  fill("#52024a"); // Pupil
  circle(mouseX + 35, mouseY - 10, 13);
}



function keyPressed(){ // Changes fish type
  if(keyIsPressed){
    if(key === "f" && fishType === fishDiamond){
      fishType = fishCircle
    }
    else if(key === "f" && fishType === fishCircle){
      fishType = fishSquare
    }
    else if(key === "f" && fishType === fishSquare){
      fishType = fishDiamond
    }
  }
}



function mousePressed(){ // Changes background colour
  if(mouseIsPressed){
   if(mouseButton === CENTER){
    currentBack++;
    if(currentBack > 3){
      currentBack = 0;
    }
  }
    if (currentBack === 0){
      bgColour = "#51719e";
    }
    else if (currentBack === 1){
      bgColour = "#8d519e";
    }
    else if (currentBack === 2){
      bgColour = "#447868";
    }
    else if (currentBack === 3){
      bgColour = "#963636";
    }
  }
}



function draw() {
  oceanBG();
  artistMark();
  fishType();
 }
