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

  test("division", () => {
    expect(calc(["2", "/", "2"])).toBe(1);
    expect(calc(["100", "/", "200"])).toBe(0.5);
    expect(calc(["100", "/", "200", "/", "5"])).toBe(0.1);
  });

  // operator precedence
  test("multiplicaiton before addition", () => {
    expect(calc(["2", "+", "3", "*", "4"])).toBe(14);
  });

  test("parentheses override precedence", () => {
    expect(calc(["(", "2", "+", "3", ")", "*", "4"])).toBe(20);
  });

  // parentheses
  test("parentheses adds invisible multiplication", () => {
    expect(calc(["(", "2", "+", "3", "(", "5", "-", "1", ")", "+", "2", ")", "*", "4"])).toBe(64);
  });

  test("nested parentheses", () => {
    expect(calc(["(", "2", "+", "3", "*", "(", "5", "-", "1", ")", "+", "2", ")", "*", "4"])).toBe(64);
  });
})
