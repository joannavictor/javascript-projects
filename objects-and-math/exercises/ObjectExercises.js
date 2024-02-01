let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};
   

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};


let monkey = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let bigRat = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 7,
   move: function () {return Math.floor(Math.random()*11)}
};


let cardiB = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 10,
   move: function () {return Math.floor(Math.random()*11)}
};

// After you have created the other object literals,
// add the astronautID property to each one.
/*
superChimpOne["astronautId"] = 1;
salamander["astronautId"] = 5;
monkey["astronautId"] = 4;
bigRat["astronautId"] = 8;
cardiB["astronautId"] = 10;
*/
// Create an array to hold the animal objects.
let astro = [superChimpOne, monkey, salamander, cardiB, bigRat];


// Print out the relevant information about each animal.
console.log(astro);

function crewReport(astro1) {
   const input = require('readline-sync');
   let userpref = input.question("Please pick an animal species to provide details: ");
//   console.log(astro1.length);
//   console.log(astro1);
//   console.log(userpref);
     let save;
      for(i = 0; i < astro1.length;i++) { 
         if (userpref == astro1[i].species) {
         return astro1[i].name +" is a " + astro1[i].species + ". They are " + astro1[i].age + " years old and " +  astro1[i].mass + "  kilograms. Their ID is " + astro1[i].astronautID } 
         }
};
console.log(crewReport(astro));
// Start an animal race!

function fitnessTest(candidates){
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
       }
       results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }
  console.log(fitnessTest(astro));