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
    expect(calc(["(", "2", "+", "3", "*", "(", "5", "-", "1", "(", "10", "/", "2", ")", ")", "+", "2", ")", "*", "4"])).toBe(16);
  });

  // negative numbers
  test("negative numbers multiplication", () => {
    expect(calc(["-5", "*", "3"])).toBe(-15);
  });

  test("double negative", () => {
    expect(calc(["-5", "*", "-3"])).toBe(15);
  });

  // identities
  test("additive identity", () => {
    expect(calc(["123", "+", "0"])).toBe(123);
  });

  test("multiplicative identity", () => {
    expect(calc(["123", "*", "1"])).toBe(123);
  });

  test("zero property", () => {
    expect(calc(["123", "*", "0"])).toBe(0);
  });

  test("subtration inverse", () => {
    expect(calc(["50", "-", "50"])).toBe(0);
  });

  test("division inverse", () => {
    expect(calc(["50", "/", "50"])).toBe(1);
  });

  test("division inverse", () => {
    expect(calc(["50", "/", "50"])).toBe(1);
  });

  // associativity and distributivity
  test("left associativity subtraction", () => {
    expect(calc(["10", "-", "3", "-", "2"])).toBe(5);
  });

  test("floating point precision", () => {
    expect(calc(["0.1", "+", "0.2"])).toBeCloseTo(0.3, 10);
  });

  test("division by zero", () => {
    expect(calc(["1", "/", "0"])).toBe(Infinity);
  });

  test("0 divided by number", () => {
    expect(calc(["0", "/", "7"])).toBe(0);
  });

  test("mixed operators", () => {
    expect(calc(["3", "+", "4", "*", "2", "/", "(", "1", "-", "5", ")"])).toBe(1);
  });
})
