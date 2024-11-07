//ex3(3p)

const number1 = prompt('Type first number');
const number2 = prompt('Type second number');
const number3 = prompt('Type third number');

const int1 = parseInt(number1);
const int2 = parseInt(number2);
const int3 = parseInt(number3);

let sum = int1 + int2 + int3;
let product = int1 * int2 * int3;
let average = sum / 3;

alert(`The sum of given numbers is ${sum}`);
alert(`The product of given numbers is ${product}`);
alert(`The average of given numbers is ${average}`);