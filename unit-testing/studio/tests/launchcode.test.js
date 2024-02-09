// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("organization is nonprofit", function() {
       expect(launchcode.Organization).toBe("non-profit");
  });
  test("executiveDirector is Jeff", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  test("Percentage of CoolEmployees", function() {
    expect(launchcode.percentageCoolEmployees).toBe("100");
  });
  test("Programs Offered", function() {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });
  test("When passed a number tas be divisible condition, Return Launch", function() {
    expect(launchcode.launchOutput(2)).toBe("Launch");
    expect(launchcode.launchOutput(3)).toBe("Code");
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
 // expect(launchcode.launchOutput(10)).toBe("Launch Rocks!");
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks");
    expect(launchcode.launchOutput(15)).toBe("Code Rocks");
    expect(launchcode.launchOutput(6)).toBe("LaunchCode");
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!)");
    expect(launchcode.launchOutput(7)).toBe("Rutabagas!");
  }); 

});