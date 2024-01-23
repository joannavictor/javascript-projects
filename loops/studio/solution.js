const input = require('readline-sync');

// Part A: #1 Populate these arrays

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];


function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals) {
  let pantry = [protein, grains, veggies, beverages, desserts];
  let meals = [];
  let temp = [];
  /// Part A #2: Write a ``for`` loop inside this function
  /// Code your solution for part A #2 below this comment 
  //(and above the return statement) ... ///
let ch1;
let str1;
let j;
for(i = 0; i < numMeals; i++) {
//   if (i == 0) {
    console.log("*********Meals For The Crew**************");
    j = i + 1;
    console.log(`Meal ${j}`);
    console.log(`Meal Assembly: ${protein} `);
    console.log("***********************************");
    ch1 = input.question("Pick 1 choice of protein: ");
    str1 = 0;
    str1 = protein.indexOf(ch1);
    temp.push(protein[str1]);
    protein.splice(str1,1);
    console.log(`Meal Assembly: ${grains} `);
    console.log("***********************************");
    ch1 = input.question("Pick 1 choice of grains: ");
    str1 = 0;
    str1 = grains.indexOf(ch1);
    temp.push(grains[str1]);
    grains.splice(str1,1);
    console.log(`Meal Assembly: ${veggies} `);
    console.log("***********************************");
    ch1 = input.question("Pick 1 choice of veggies: ");
    str1 = 0;
    str1 = veggies.indexOf(ch1);
    temp.push(veggies[str1]);
    veggies.splice(str1,1); 
    console.log(`Meal Assembly: ${beverages} `);
    console.log("***********************************");
    ch1 = input.question("Pick 1 choice of beverages: ");
    str1 = 0;
    str1 = beverages.indexOf(ch1);
    temp.push(beverages[str1]);
    beverages.splice(str1,1);
    console.log(`Meal Assembly: ${desserts} `);
    console.log("***********************************");
    ch1 = input.question("Pick 1 choice of desserts: ");
    str1 = 0;
    str1 = desserts.indexOf(ch1);
    temp.push(desserts[str1]);
    desserts.splice(str1,1); 
 
 meals.push(temp);
  console.log(pantry);
 console.log(`Crew ${j}: Meal Assembly is complete ${temp}`);
 console.log(meals); 
 temp = [""];
}

  return meals;
}


function askForNumber() {
  numMeals = input.question("How many meals would you like to make?");
  /// CODE YOUR SOLUTION TO PART B here ///
    while ((numMeals < 1) || (numMeals > 6) )
    { 
      numMeals = Number(numMeals);
      numMeals = input.question("Sorry Re-Enter!!! Number of meals ( Min - 1 & Max - 6 Meals ):");
      numMeals = Number(numMeals);
    }

  return numMeals;
}


function generatePassword(string1, string2) {
 /// Code your Bonus Mission Solution here ///
  let code = '';
  
  for(k = 0; k < string1.length; k++) {
    code = code + string1[k] + string2[k];
     }
    return code;
}

function runProgram() {
  
  /// TEST PART A #2 HERE ///
  /// UNCOMMENT the two lines of code below that invoke the mealAssembly function (starting with 'let meals =') and print the result ///
  /// Change the final input variable (aka numMeals) here to ensure your solution makes the right number of meals ///
  /// We've started with the number 2 for now. Does your solution still work if you change this value? ///
  
 //  let meals = mealAssembly(protein, grains, veggies, beverages, desserts, 2);
 //  console.log(meals)
  

  /// TEST PART B HERE ///
  /// UNCOMMENT the next two lines to test your ``askForNumber`` solution ///
  /// Tip - don't test this part until you're happy with your solution to part A #2 ///
  
   let mealsForX = mealAssembly(protein, grains, veggies, beverages, desserts, askForNumber());
   console.log(mealsForX);

    /// TEST PART C HERE ///
  /// UNCOMMENT the remaining commented lines and change the password1 and password2 strings to ensure your code is doing its job ///

   let password1 = 'abcdeghijk';
   let password2 = '123#$%~+_*';
   let code = '';

   console.log("Time to run the password generator so we can update the menu tomorrow.")
   console.log(`The new password is: ${generatePassword(password1, password2)}`);
}

module.exports = {
  protein: protein,
  grains: grains,
  veggies: veggies,
  beverages: beverages,
  desserts: desserts,
  mealAssembly: mealAssembly,
  askForNumber: askForNumber,
  generatePassword: generatePassword,
  runProgram: runProgram
};
