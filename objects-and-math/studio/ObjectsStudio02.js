// Code your orbitCircumference function here:
function circumference(radius) {
return Math.round(2*Math.PI*radius);
}
let orbitsCompleted = 8;
let time;
// Code your missionDuration function here:
function missionDuration(orbitsCompleted,orbitRadius = 2000, orbitalSpeed = 28000) {
         time = (orbitsCompleted*circumference(orbitRadius))/orbitalSpeed;
         return Math.round(time*100)/100;
}

// Copy/paste your selectRandomEntry function here:
function randomSelection(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
};
console.log( `The mission will travel ${missionDuration(orbitsCompleted,orbitRadius = 2000, orbitalSpeed = 28000)} km around the planet, and it will take ${time} hours to complete.`);
// Code your oxygenExpended function here:

function oxygen(astronaut,orbRadius,speed) {
  let duration = missionDuration(3,orbRadius,speed);
  let oxUsed = Math.round(astronaut.o2Used(duration)*1000)/1000;
  return `${astronaut.name} will perform the spacewalk, which will last ${duration} hours and require ${oxUsed}kg of oxygen.`;

};

// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateC,candidateE];
 let astro = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
 for (let k=0; k < astro.length;k++){
     console.log(oxygen(astro[k],2000,28000));
 }
 