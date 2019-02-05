var x = 1;

while (x != 21) {
    var output = "";
    if (x % 3 === 0 && x % 5 === 0) {
        output += "JuliaJames";
    } else if (x % 3 === 0) {
        output += "Julia";
    } else if (x % 5 === 0) {
        output += "James";
    } else {
        output += x;
    }
    console.log(output);
    ++x;
}