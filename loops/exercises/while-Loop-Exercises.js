//Define three variables for the LaunchCode shuttle - one for the starting fuel level, 
//another for the number of astronauts aboard, and the third for the altitude the 
//shuttle reaches.

let fuel = 0;
let astro = 0;
let alti = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. 
  //Validate that the user enters a positive, integer value greater than 5000 but 
  //less than 30000. */
  const input = require('readline-sync');
  fuel = input.question("Enter the starting fuel level to be between 5000 - 30000 :"); 
  fuel = Number(fuel);  // Check to ensure its positive integer number
  while ((fuel <= 4999) && (fuel => 30000)) {
    fuel = input.question('Invalid input. Please enter appropriate starting fuel:');
    fuel = Number(fuel);
 }

//b. Use a second loop to query the user for the number of astronauts 
//(up to a maximum of 7). Validate the entry.
  
astro = input.question("Enter the number of Astronauts ( 1 - 7 ):"); 
astro = Number(astro);  // Check to ensure its positive integer number
while ((astro < 1 ) || (astro > 7)) {
  astro = input.question("Invalid input. Please enter number of astronauts ( 1 - 7) :");
  astro = Number(astro);
}
console.log(astro);
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. 
//Each iteration, decrease the fuel level by 100 units for each astronaut aboard. 
//Also, increase the altitude by 50 kilometers.

while (fuel-100*astro >= 0) {
  alti += 50;
  fuel -= 100*astro;
  }
 alti = Number(alti);
 console.log(alti);
//Exercise #5: Output the result with the phrase, 
console.log(`The shuttle gained an altitude of ${alti} km.`);

//If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, 
//“Failed to reach orbit.”
if (alti > 2000) {
  console.log(`Orbit Achieved`) }
  else {console.log(`Failed to reach orbit`)}
