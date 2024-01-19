const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them
// to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let var1 = str.slice(0,3);
let var3 = str.slice(3,10);
console.log(var1);
let var2 = var3+var1;
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The value ${str} is modified to ${var2}.`);
//2) Modify your code to accept user input. Query the user to enter the number of letters 
//that will be relocated.

let num1 = input.question("Please enter your name: ");
console.log("Hello " + num1);
let um1 = input.question("Please the word of your choice: ");
console.log("Entered word is " + um1 + " .");
let um2 = input.question("Enter the letters to be relocated from " + um1 + " : ");
let um3 = um1.length; 
if (um2 <= um3) {
let uar1 = um1.slice(0,um2);
let uar3 = um1.slice(um2,um3);
let uar2 = uar3+uar1;
console.log(`The value ${um1} is modified to ${uar2}.`);
} else {
//3) Add validation to your code to deal with user inputs that are longer than the word. 
//In such cases, default to moving 3 characters. Also, the template literal should 
//note the error.
    
    console.log(`The word ${um1} is longer than the relocate number  ${um2}.`);
    uar1 = um1.slice(0,3);
    uar3 = um1.slice(3,um3);
    uar2 = uar3+uar1;
    console.log( `Defaulting the relocate length to 3, ${uar2} .`);
}

