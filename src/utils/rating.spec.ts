import getRating from "./rating";

describe("getRating", () => {
  it("should return 3.739", () => {
    const testRates = [
      { Value: "8.9/10" },
      { Value: "100" },
      { Value: "98/100" },
    ];

    expect(getRating(testRates)).toBe(3);
  });


  it("should return 2.2", () => {
    const testRates = [
      { Value: "10/10" },
      { Value: "10" },
      { Value: "10/100" },
    ];

    expect(getRating(testRates)).toBe(1);
  });
});
