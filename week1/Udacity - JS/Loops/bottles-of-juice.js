/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;
var bottle = " bottle ";
var bottles = " bottles ";
while (num >= 1) {
    if (num >= 3) { // start checking on >=3, lyrics are different in 2 and 1
        console.log(num + bottles + "of juice on the wall! " + num + bottles + "of juice! Take one down, pass it around... " + (num - 1) + bottles + "of juice on the wall!");
    } else if (num === 2) {
        console.log(num + bottles + "of juice on the wall! " + num + bottles + "of juice! Take one down, pass it around... " + (num - 1) + bottle + "of juice on the wall!");
    } else if (num === 1) {
        console.log(num + bottle + "of juice on the wall! " + num + bottle + "of juice! Take one down, pass it around... 0" + bottles + "of juice on the wall!");
    }
    num--;
}