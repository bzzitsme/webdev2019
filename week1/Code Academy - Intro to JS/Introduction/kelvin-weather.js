// variable called kelvin of type const
const kelvin = 293;
// variable called celsius of type const, 273 degrees less than kelvin
const celsius = kelvin - 273;
// fahrenheit of type let
let fahrenheit = celsius * 1.8 + 32;
// rounding down the fahrenheit temp
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);