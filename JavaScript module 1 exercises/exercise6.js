
'use strict';




//ex6(3p)

const root = confirm('Should i calculate the square root?');
 if (root === true) {
    let number = prompt('Select a positive number');
    if (number>0) {
        let number1 = parseInt(number);
        alert(Math.sqrt(number1));
    } else if (number < 0 ) {
        alert('Type in a number that is greater than 0');
    }

 }
 else {
    if (root === false) {
        alert('Square root is not calculated');
    }
 }
















