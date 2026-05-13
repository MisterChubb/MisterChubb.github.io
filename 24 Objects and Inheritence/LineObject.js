// Child class #2 - Line
class LineObject extends AnimatedObject{
    constructor(){
        super(random(width), random(height));
    }
    move(){ // Combo pverride, but build on parent
        super.move() // Run parent's move()
        this.x -= 5;
        if (this.x < 0) this.x = width;

    }
    display(){
        if(mouseIsPressed){ // Full override (no ref to parent)
            strokeWeight(12);
        }
        else strokeWeight(2);
        line(this.x, this.y, this.x + 15, this.y);
    }
}