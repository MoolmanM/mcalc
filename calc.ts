function applyOperator(
  inputArr: string[],
  operator: string,
  fn: (a: number, b: number) => number
): void {
  let i: number;
  while ((i = inputArr.indexOf(operator)) !== -1) {
    const left = Number(inputArr[i - 1]);
    const right = Number(inputArr[i + 1]);
    const total = fn(left, right);
    inputArr[i - 1] = total.toString();
    inputArr.splice(i, 2);
  }
}
export function calc(inputArr: string[]): number {
  let i;
  while ((i = inputArr.lastIndexOf("(")) !== -1) {
    let closeIndex = inputArr.indexOf(")", i);
    const subArr = inputArr.slice(i + 1, closeIndex);
    applyOperator(subArr, "/", (a, b) => a / b);
    applyOperator(subArr, "*", (a, b) => a * b);
    applyOperator(subArr, "+", (a, b) => a + b);
    applyOperator(subArr, "-", (a, b) => a - b);
    inputArr[i] = subArr[0]
    inputArr.splice(i + 1, closeIndex - i)
    console.log(subArr)
  }
  console.log(inputArr)

  applyOperator(inputArr, "/", (a, b) => a / b);
  applyOperator(inputArr, "*", (a, b) => a * b);
  applyOperator(inputArr, "+", (a, b) => a + b);
  applyOperator(inputArr, "-", (a, b) => a - b);
  return Number(inputArr[0])
}
import { Command } from "commander";

const program = new Command();

program.command('calc')
  .description('Calculate given numbers')
  .argument('<numbers...>', 'numbers to calc')
  .action((numbers: string[]) => {
    const result = calc(numbers);
    console.log(result)
  });

program.parse();
