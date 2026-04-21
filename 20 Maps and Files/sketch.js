// Maps and Files
// Miki Hoang
// April 21, 2026

let textFile;
let imgFile, rows, cols, colorMap;

function preload(){
  textFile = loadStrings("assets/info.txt");
  imgFile = loadStrings("assets/Colorimage.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // await loadAssets();
  noLoop();

  // Determine number of rows and colmns
  rows = imgFile.length
  cols = imgFile[0].length

  //construct the Map of Colours
  colorMap = new Map([
    ["b", "black"],
    ["w", color(255)],
    ["r", "red"],
    ["l", "brown"],
    ["p", "purple"]
  ]);

}

function drawImage(){
  // Reads through text info and constructs image
  let pixelSize = 50;
  for(let y = 0; y < rows; y++){
    let currentRow = imgFile[y];
    for(let x = 0; x < cols; x++){
      let currentKey = currentRow[x];
      fill(colorMap.get(currentKey));
      square(x*pixelSize, y*pixelSize, pixelSize);
    }
  }
}

function draw() {
  background(220);
  processText();
  drawImage();
}

function processText(){
  // Looks at 3 different ways tp split up larger strings into words, or
  // characters split() and ...spread syntax
  print("SPLIT INTO WORDS");
  let splitWords = textFile[0].split(" ");
  print(splitWords);

  print("SPLIT INTO CHARACTERS");
  let splitChars = textFile[1].split("");
  print(splitChars);

  print("SPREAD INTO CHARACTERS");
  let spreadChars = [...textFile[2]];
  print(spreadChars);
}
