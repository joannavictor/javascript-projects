function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
}

//TODO: Export the randomFromArray function.
function randomFromArray(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

module.exports = {
  randomFromArray: randomFromArray
};