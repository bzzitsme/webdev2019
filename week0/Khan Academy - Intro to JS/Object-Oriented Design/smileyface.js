var SmileyFace = function(centerX, centerY){
    this.centerX = centerX;
    this.centerY = centerY;
};
SmileyFace.prototype.draw = function() {
    fill(255, 234, 0);
    ellipse(this.centerX, this.centerY, 150, 150);
    fill(0, 0, 0);
    ellipse(this.centerX-30, this.centerY-30, 20, 20); 
    ellipse(this.centerX+30, this.centerY-30, 20, 20); 
    noFill(); 
    strokeWeight(3);
    arc(this.centerX, this.centerY+10, 64, 40, 0, 180);
};

SmileyFace.prototype.speak = function(msg){
    text(msg, this.centerX + 80, this.centerY + 80);
};


var face = new SmileyFace(100, 100);
var face1 = new SmileyFace(200, 290);


face.draw();
face1.draw();
face.speak("hey");
face1.speak("he2");


