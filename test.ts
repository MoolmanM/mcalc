function sumNumbers(numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}
function linearSearch(arr: string[], target: string): number[] {
  const outputArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      outputArr.push(i)
    }
  }
  return outputArr
}

function calcAction(numbers: string[]) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === "+") {
      const left = Number(numbers[i - 1]);
      if (total == 0) {
        total = left
      }
      const right = Number(numbers[i + 1]);
      total += right;
    }
    if (numbers[i] === "-") {
      const left = Number(numbers[i - 1]);
      if (total == 0) {
        total = left
      }
      const right = Number(numbers[i + 1]);
      total -= right;
    }
  }
  console.log(linearSearch(numbers, "+"))
  console.log(total)
}
import { Command } from "commander";

const program = new Command();

program.command('calc')
  .description('Calculate given numbers')
  .argument('<numbers...>', 'numbers to calc')
  .action(calcAction);

program.parse();
