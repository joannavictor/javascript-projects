
function makeLine(size) {
  let line = '';
  for (let i = 0; i < size; i++) {
    line += '####';
  }
  return line;
}
console.log(makeLine(5));

console.log("***********************");
function makerectangle(width,height) {
    let rectangle = '';
    for (let i=0;i<height;i++) {
 //      rectangle += makeLine(width) + '\n';
         rectangle += makeLine(width);
    }
        return rectangle;
    }
console.log(makerectangle(1,8));


function makeLine(size) {
    let line = '';
    for (let i=0;i<size;i++) {
        line += '####' + '\n';
    }
        return line;
    }

console.log("***********************");
function downwardStairs(height) {
    let stairs = '';
    for (let i = 0; i<height; i++) {
        stairs += makeLine(i+1) + '\n';
    }
    return(stairs)
        }
console.log(downwardStairs(5));


function makeSpaceLine(numSpaces, numChars) {
    let line = '';
    for (let i = 0; i < numChars; i++) {
        line += '#';
    }
        for(let j = 0; j < numSpaces; j++) {
        let spaces = ' ';    
        spaces += '';
       line = spaces + line + spaces;
      }
              
  return line ;
  } 

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
     }
 
    function makeRevIsoscelesTriangle(height) {
    let triangle = '';
    let h = height - 1;
    for (let i = h; i >= 0; i--) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
     }
  console.log(makeIsoscelesTriangle(20));
  console.log(makeRevIsoscelesTriangle(20));

let stringVal = String(42);

console.log(String(42));

let returnVal = "";
returnval = console.log("LaunchCode");
console.log(returnVal);

function printNames(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

function plusTwo(num) {
    return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
    a = plusTwo(a);
}

console.log(a);

function repeater(str) {
    let repeated = str + str;
    console.log(repeated);
}

repeater('Bob');


function removeHyphens(str) {
    let strWithoutHyphens = ''

    for (let i = 0; i < str.length; i++) {
    if (str[i] !== '-') {
        strWithoutHyphens += str[i];
    }
    }

    return strWithoutHyphens;
}
let strWithoutHyphens = "";
let launchCodePhone = "314-254-0107";
console.log(removeHyphens(launchCodePhone));
console.log(strWithoutHyphens);



