export function calc(inputArr: string[]): number {
  let i = 0;
  // multiplication
  while ((i = inputArr.indexOf("*")) !== -1) {
    const left = Number(inputArr[i - 1]);
    const right = Number(inputArr[i + 1]);
    const total = left * right;
    inputArr[i - 1] = total.toString();
    inputArr.splice(i, 2);
  }
  // addition
  while ((i = inputArr.indexOf("+")) !== -1) {
    const left = Number(inputArr[i - 1]);
    const right = Number(inputArr[i + 1]);
    const total = left + right;
    inputArr[i - 1] = total.toString();
    inputArr.splice(i, 2);
  }
  // subtraction
  while ((i = inputArr.indexOf("-")) !== -1) {
    const left = Number(inputArr[i - 1]);
    const right = Number(inputArr[i + 1]);
    const total = left - right;
    inputArr[i - 1] = total.toString();
    inputArr.splice(i, 2);
  }
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
