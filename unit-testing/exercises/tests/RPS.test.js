const checkFive = require('../RPS.js');

describe("WhoWon - Rock, Paper, Scissors, Shoe", function(){

   test("Whowon - Rock & Paper", function() {
      expect(checkFive("rock","paper")).toBe("Player 2 wins!");
   });

   test("Whowon - Paper & rock", function() {
      expect(checkFive("paper","rock")).toBe("Player 1 wins!");
   });

   test("Whowon - Paper & Scissors", function() {
    expect(checkFive("paper","scissors")).toBe("Player 2 wins!");
   });

});
