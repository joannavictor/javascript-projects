//Create an anonymous function and set it equal to a variable.
const input = require('readline-sync');
// Your function should:
// If passed a number, return the tripled value.
let num = function(tNumber) 
{
    console.log(typeof(tNumber));
    if (typeof tNumber === "number") 
    {
    return (tNumber * 3);
    } 
    else if (typeof tNumber  === "string") 
    { console.log("ARRR!")} else { return tNumber; };
};

//let prompt = "Enter a number to triple: ";
//let userInput = input.question(prompt);
let userInput = 2;
let tripleNum = num;
console.log(tripleNum(userInput));

/*
b) If passed a string, return the string “ARRR!”

// Completed in above loop

c) Be sure to test your function before moving on the next part. 
*/

/* Add to your code! Use your function and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];
let tripled = arr.map(function (n,i) {
    
    if (typeof n === "number") 
    {
    let a = (n * 3);
    return a;
    } 
    else if (typeof n  === "string") 
        { n = "ARRR";
          return n} 
    else 
    { return n; };
});

console.log(tripled);


