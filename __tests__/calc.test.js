const calc = require("../calculator.js");

describe("add", () => {
  it("adds 2 numbers", () => {
    // let valA = 2;
    // let valB = 2;

    // let expectedResult = 4;
    // let result = calc.add(valA, valB);

    // expect(result).toBe(expectedResult);

    expect(calc.add(2, 2)).toBe(4);
  });

  it("substracts 2 number", () => {
    expect(calc.subtract(5, 2)).toBe(3);
  });
});

describe("multiple", () => {
  it("multiplies 2 numbers", () => {
    expect(calc.multiply(3, 3)).toBe(9);
  });

  it("divides 2 number", () => {
    expect(calc.divide(10, 2)).toBe(5);
  });
});
