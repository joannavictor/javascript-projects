//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
let slic = "JavaScript";
let s1 = slic.slice(0,1);
let s2 = slic.slice(4,5);
let m1 = (s1 + s2 );
console.log(m1);
console.log(`The abbreviation for ${slic} is ${m1}.`);
//2. Without using slice(), use method chaining to accomplish the same thing.
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
//4. Just for fun, try chaining 3 or more methods together, and then print the result.let x1 = console.log(slic.charCodeAt(0));
let x2 = console.log(slic.charCodeAt(4));

let codes = [74, 83];

let characters = String.fromCharCode(codes[0]) + String.fromCharCode(codes[1]);
console.log(characters);
console.log(`The abbreviation for ${slic} is ${characters}.`);

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';

let var1 = "title case";
varr = var1.replace("t", "T");
vF = varr.replace("c", "C");
console.log(vF);
 