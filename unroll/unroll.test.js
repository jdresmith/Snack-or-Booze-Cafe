const unroll = require("./unroll");

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  test("should return the values in a spiral pattern for a 3x3 square array", () => {
    const square = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(unroll(square)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
  test("should return the values in a spiral pattern for a 4x4 square array", () => {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    expect(unroll(square)).toEqual([
      1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10,
    ]);
  });
});
