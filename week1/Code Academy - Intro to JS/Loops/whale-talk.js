let input = 'Turpentine and turtles';

let vowels = ['u', 'e', 'i', 'a'];

let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
    for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
        if (input[inputIndex] === vowels[vowelsIndex]) {
            resultArray.push(input[inputIndex]);
        }
    }
    if (input[inputIndex] === 'e' || input[inputIndex] === 'u') {
        resultArray.push(input[inputIndex]);
    }
}

console.log(resultArray.join('').toUpperCase());