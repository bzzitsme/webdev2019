/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function laugh(num) {
    var res = "";
    for (var i = 0; i < num; i++) {
        res += "ha";
    }
    return res + "!";
});

// your code goes here
// call the emotions function here and pass in an
// inline function expression