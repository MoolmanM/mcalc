import { calc } from "./calc";

describe("Calculator", () => {
  // Basic arithmetic
  test("addition", () => {
    expect(calc(["2", "+", "2"])).toBe(4);
    expect(calc(["100", "+", "200"])).toBe(300);
    expect(calc(["100", "+", "200", "+", "5"])).toBe(305);
  });
  test("subtraction", () => {
    expect(calc(["2", "-", "2"])).toBe(0);
    expect(calc(["100", "-", "200"])).toBe(-100);
    expect(calc(["100", "-", "200", "-", "5"])).toBe(-105);
  });
  test("multiplication", () => {
    expect(calc(["2", "*", "2"])).toBe(4);
    expect(calc(["100", "*", "200"])).toBe(20000);
    expect(calc(["100", "*", "200", "*", "5"])).toBe(100000);
  });
})
