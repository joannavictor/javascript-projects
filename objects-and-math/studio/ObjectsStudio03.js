// Code your crewMass function here:


// Code your fuelRequired function here:
function crewMass(arr)
{
  let mass = 0;
  for (i=0;i<arr.length;i++){
    mass += arr[i].mass;
    }
    return mass;
}
// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.
function fuelRequired(crewArray){
let massOfCrew = crewMass(crewArray);
let fuel = (75000+massOfCrew)*9.5;
for (j=0;j<crewArray;j++) {
  if (crewArray[j].species === 'dog' || crewArray[j].species === 'cat'){
  fuel += 200;
}else { fuel += 100 }
  
}return Math.ceil(fuel);
}

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateB,candidateD,candidateF];
 console.log(`This mission has a launch of ${75000+crewMass(crew)} kg and requires ${fuelRequired(crew)} kg of fuel`);

