let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

//1) Use bracket notation to replace ‘slinky’ with ‘space tether’. Print the array to confirm the change.
cargoHold.splice(5,1,'space tether'); 
console.log(cargoHold);
//2) Remove the last item from the array with pop. Print the element removed and the updated array.
console.log(cargoHold.pop());
console.log(cargoHold);
//3) Remove the first item from the array with shift. Print the element removed and the updated array.
cargoHold.shift();
console.log(cargoHold);
//4) Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and ‘20 meters’ to the the array - the number at the start and the string at the end. Print the updated array to confirm the changes.
cargoHold.push("20 meters");
cargoHold.unshift(1138);
console.log(cargoHold);
//5) Use a template literal to print the final array and its length.
let c1 = cargoHold.length;
console.log(c1);
console.log(`Final Array: ${cargoHold} and its length is ${c1}.`);
