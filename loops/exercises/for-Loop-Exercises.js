/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, 
    //but only if the numbers are multiples of 3. 
    //(Your code should work even if you replace 50 or 20 with other numbers). */


//a.
for(i = 0;i <= 20; i++) {console.log(i)}
//b.
for(i = 3;i < 30; i++) {console.log(i)}
//c.
n = 14;
total = 0;
for(i = 0;i <= 26 ; i++) {
  total = i - n;
  console.log(total)}
//Can be done in other ways as well.....
//for (let i = 12; i >= -14; i-=2) {
//  console.log(i);
//}

//d.
for(i = 20;i <= 50 ; i++) {
   if (i % 3 === 0 ) {console.log(i)}}

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array 
//[1, 5, ‘LC101’, ‘blue’, 42]. */
let var1 = "Launchcode";
let var2 = [1, 5, "LC101", "blue", 42];
/*
Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line. */
console.log("**********");
for(i = 0;i < var2.length ; i++) { console.log(var2[i])}
/*  b. Print each character of the string - in reverse order - to a new line. */ 
console.log("**********");

for (let i = 9; i > -1 ; i--) {
console.log((var1[i]));

}
/*Exercise #3:Construct a for loop that sorts the array 
//[2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
number = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let con = 0;
arr1 = []; 
arr2 = [];
let j = 0;
let k = 0;
for(let i = 0; i < number.length; i++) {
let con = (number[i] % 2);
if (con === 0 ) {
arr1.push(number[i]); console.log(`Number is even ${number[i]}`) }
else 
{arr2.push(number[i]);console.log(`Number is odd ${number[i]}`)
}
}
console.log(arr1);
console.log(arr2);
