/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function (num) {
    var res = "";
    for (var i = 0; i < num; i++) {
        res += "ha";
    }
    return res += '!';
}

console.log(laugh(10));