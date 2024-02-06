const { averageForTest, averageForStudent } = require("../exercises/ScoreCalcs/averages");

function isPalindrome(str){
    return str === str.split('').reverse().join('');
}

function evenOrOdd(num){
    if (num%2===0){
        return "Even";
    } else {
        return "Odd";
    }
}

function randomArrayElement(arr){
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
}

printAll(astronauts, testTitles, scores);
averageForTest(j, scores);
averageForStudent();