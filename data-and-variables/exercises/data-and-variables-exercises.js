//Name of the space shuttle	Determination
//Shuttle Speed (mph)	17,500
//Distance to Mars (km)	225,000,000
//Distance to the Moon (km)	384,400
//Miles per kilometer	0.621

//Start of program ***********************************************

// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
//let milesPerKm = 0.621;  // Need clarification should we use const or let as both provides same results.
const milesPerKm = 0.621;
// Calculate a space mission below
let milesToMars = distanceToMarsKm * milesPerKm; 
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;
// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKm * milesPerKm; 
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;

console.log(typeof 'Determination');
console.log(typeof 17500 );
console.log(typeof 225000000);
console.log(typeof 384400);
console.log(typeof 0.621);

// Print the results of the space mission calculations below
console.log( shuttleName +  " will take " + daysToMars + " days to reach Mars.");
// Print the results of the trip to the moon below
console.log(shuttleName + " will take " + daysToMoon + " days to reach Moon.");

//End Of Program **********************************************


