let result = 0 ;
function gradeLabs(labs) {
    for (let i=0; i < labs.length; i++) {
    try {
    let lab = labs[i];
    console.log(result = labs.runLab(3)); } 
    catch(TypeError) { console.log("Error thrown"); 
  console.log(`${labs[i].student} code worked: ${result === 27}`); 
  } 
 }
}
/*
let studentLabs = [
  {
    student: 'Carly',
    runLab: function (num) {
        return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
        return num * num;
    }
  }
];
*/
let studentLabs2 = [
  {
     student: 'Blake',
      myCode: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Jessica',
      runLab: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Mya',
      runLab: function (num) {
        return num * num;
      }
  }
];

gradeLabs(studentLabs2);
//gradeLabs(studentLabs);
