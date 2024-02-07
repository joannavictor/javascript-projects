
const checkFive = require('../checkFive.js');

describe("Check the number if its 5", function(){

   test("Number equal to 5", function() {
      expect(checkFive("5")).toBe("5 is greater than 5.");
   });

   test("Number greater than 5", function() {
      expect(checkFive("24")).toBe("24 is greater than 5.");
   });

   test("Number lesser than 5", function() {
    expect(checkFive("1")).toBe("1 is less than 5.");
 });

 test("Number lesser than 5", function() {
    expect(checkFive("0")).toBe("0 is less than 5.");
 });

 test("Not too sure in comparing alphabets", function() {
    expect(checkFive("A")).toBe("A is greater than 5.");
 });
});
