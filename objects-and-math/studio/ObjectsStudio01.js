

// Code your buildCrewArray function here:


let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:

// function to select a random entry from the idNumbers array. 
function randomSelection(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
};
//Call the function three times to select three ID numbers. 
//Store these selections in a new array, making sure to avoid repeated numbers. 
//No animal can be selected more than once!
let newArray = [];
let randomId = 0;

while(newArray < 3) {
  randomId = randomSelection(idNumbers);
  if (!newArray.includes(randomId)){
       newArray.push(randomId);
  };      
};
console.log(newArray);
/*
let selectedCrew= [];
function buildCrewArray(ids,candidates) {
for(i=0;i<ids.length;i++) {
  for(j=0;j<candidates.length;j++) {
    if(candidates[j].astronautID === ids[i]) {
       selectedCrew.push(candidates[j]);

       console.log(selectedCrew);
    }
    return selectedCrew;
    }
  }
}

let crew = buildCrewArray(newArray,animals);
console.log(crew);

// literal to print:
//console.log(`${crew[0].name}, ${crew[1].name}, ${crew[2].name} "are going to space!" `);

*/


/*
let newArray =[];
// Code your selectRandomEntry function here:
function randomSelection(array){
  let store;
 // newArray.push(array[Math.floor(Math.random()*array.length)]);
  store =   array[Math.floor(Math.random()*array.length)];
  if (newArray.includes(store)) {
    return newArray}
   else 
   {
    newArray.push(store); 
   }
  return newArray;
  }
 
while (newArray < 4) {
  console.log(randomSelection(idNumbers));
};


*/