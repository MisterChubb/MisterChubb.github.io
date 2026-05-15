// Monster Dating Sim! (REPLACE WITH EPIC NAME LATER)
// Miki Hoang
// May 11, 2026
//(EPIC DESCRIPTION GOES HERE)

let startB;
let startBImage;

function preload(){
  startBImage = loadImage("Images/StartB.jpg");
}
function setup(){
  createCanvas(1500, 1500);
  startB = new Clickable();
  startB.image = startBImage;
  startB.locate(450, 650);
  startB.resize(500,200);
  startB.text = "";

  startB.onPress = function(){
    print("PLEASE WORK PLEAAASSEEE");

  }

  startB.onHover = function(){
    this.color = "Lime";
  }
  }

  
  // startB.position(450, 750);
  // startB.size(500, 100);
  // startB.style("background-image", )
  // startB.mousePressed(loveInterestSurvey);
// }


function loveInterestSurvey(){
  print("Hello!");
  // startB.hide();
}

function draw(){
  // background(220);
  startB.draw();
}
