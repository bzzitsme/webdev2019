draw = function() {
    stroke(204, 120, 120);
    strokeWeight(50);
    fill(mouseX, mouseY, mouseX);
    ellipse(mouseX, mouseY, mouseX, mouseY);
};
