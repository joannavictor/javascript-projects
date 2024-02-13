// Write a function called 'divide' that takes two parameters: a numerator and a denominator.
const input = require("readline-sync");
let num1 = input.question("Division - Enter a Numerator: ");
let num2 = input.question("Division - Enter a Denominator: ");
let num3 = 0;
// Your function should return the result of numerator / denominator.
/*
expect( function() {
    divideNumbers(num1,num2); 
}).toThrow(new Error('You cannot divide by zero!'));

try {
    console.log(divideNumbers(num1,num2));
    num3 = num1/num2;
} catch(TypeError) {
    console.log("Error: Attempted to divide by zero.", num3);
} finally {
    console.log("You tried with denominator as zero:", num2);
}

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:

function divideNumbers(numeratr,denominatr) {
    let num3 = numeratr/denominatr;
    return num3;    
 };
 */
 function divide(numerator, denominator) {
    if (denominator === 0) {
       throw Error('You cannot divide by zero!');
    }
    return numerator/denominator;
 }

 console.log(divide(num1,num2));


 function divide1(numerator, denominator) {
    if (denominator === 0) {
       throw Error('You cannot divide by zero!');
    }
    return numerator/denominator;
 }

divide(8,0);