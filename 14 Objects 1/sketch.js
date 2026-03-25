// Objects: Books
// Miki Hoang
// March 24, 2026

// --------- GLOBAL VARIABLES -----------
let myBook; // CAN'T INIT OBJECTS HERE
let myBook2;
let myBook3;
// --------------------------------------

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create a single book
  myBook = new Book("CS30 Text", "Mr. Scott", 1234567891011,
"leatherbound", 500, width * 0.3);
  myBook2 = new Book("eBay Horrors", "Mariyya", 2020202020, "softcover", 
  800, width * 0.4);
}


function draw() {
  background(220);
  myBook.display();
}

class Book{
  // 1. Constructor
  constructor(title, author, isbn, cover, pages, x){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    this.pages = pages;
    this.x = x;
  }

  // 2. Class Methods
  // Since it's in a class, omit function keyword
  display(){
    // Render book object on the canvas
    rectMode(CENTER); textAlign(CENTER,CENTER);
    textSize(20);

    // Set fill colour based on covertype
    switch(this.cover){
      case "softcover":
      fill("Yellow");
      break;
    case "hardcover":
      fill("Navy");
      break;
    case "leatherbound":
      fill("Brown");
      break;
    }

    // Now draw the book
    push();
    translate(this.x, height/2);
    rect(0, 0, this.pages/10, 150);
    fill("White");
    text(this.title[0], 0, -50);
    pop();
  }
}