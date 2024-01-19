let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. 
//Alphabetize the contents of each cabinet.
let cabinet0 = food.split(",");
let cabinet1 = equipment.split(",");
let cabinet2 = pets.split(",");
let cabinet3 = sleepAids.split(",");
 
console.log(cabinet0.sort());
console.log(cabinet1.sort());
console.log(cabinet2.sort());
console.log(cabinet3.sort());

//2) Initialize a cargoHold array and add the cabinet arrays to it. 
//Print cargoHold to verify its structure.
cargoHold = [];
cargoHold.push(cabinet0);
cargoHold.push(cabinet1);
cargoHold.push(cabinet2);
cargoHold.push(cabinet3);
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let num1 = input.question("Please enter your name: ");
console.log("Hello " + num1);
console.log(cargoHold);
let um1 = input.question("Please select a cabinet (0 - 3) in the cargoHold: ");
console.log("Selected cabinet is " + um1 + " .");
//4) Use bracket notation and a template literal to display the contents of the 
//selected cabinet. If the user entered an invalid number, print an error message.
if (um1 < 0 || um1 > 3) { console.log("Invalid Number!!! Enter value between 0 - 3. ")} 
else 
{
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item.
// Use the 'includes' method to check if the cabinet contains the selected item, 
//then print “Cabinet ____ DOES/DOES NOT contain ____.”
let um2 = input.question("Please enter the item needed from Cabinet " + um1 + " :");
//if (um1 = 0 && (cabinet0.includes(um2))) {
    if ((cabinet0.includes(um2)) || (cabinet1.includes(um2)) || (cabinet2.includes(um2)) || (cabinet3.includes(um2))) {
              console.log(`Cabinet ${um1} does contains ${um2} .`)} 
    else { console.log(`Cabinet ${um1} does not contains ${um2} .`)}
}

