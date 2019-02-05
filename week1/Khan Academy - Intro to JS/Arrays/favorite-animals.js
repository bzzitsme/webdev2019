var animals = ["cat", "dog", "horse", "rat", "pig"];

var index = 0;
while(index < animals.length){
    fill(255, 0, 0);
    text(animals[index], 10, index * 20 + 10);
    index++;
}