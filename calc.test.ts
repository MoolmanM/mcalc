import { calc } from "./calc";

describe("Calculator", () => {
  // Basic arithmetic
  test("addition", () => {
    expect(calc(["2", "+", "2"])).toBe(4);
    expect(calc(["100", "+", "200"])).toBe(300);
    //expect(calc(["100", "+", "200", "+", "5"])).toBe(305);
  });
})
