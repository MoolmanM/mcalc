function linearSearch(arr: string[], target: string): number[] {
  // Can probably just check for every single symbol.
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
  const parenthesesIndex = linearSearch(numbers, "(");
  const exponenetsIndex = linearSearch(numbers, "*");
  const multiplicationIndex = linearSearch(numbers, "*");
  const divisionIndex = linearSearch(numbers, "/");
  const additionIndex = linearSearch(numbers, "+");
  const subtractionIndex = linearSearch(numbers, "-");

  if (parenthesesIndex.length > 0) {

  }
  if (exponenetsIndex.length > 0) {

  }
  if (multiplicationIndex.length > 0) {
    for (let i = 0; i < multiplicationIndex.length; i++) {
      const left = Number(numbers[multiplicationIndex[i] - 1]);
      const right = Number(numbers[multiplicationIndex[i] + 1]);
      console.log(left, right);
      total = left * right
      console.log(total)
    }
  }
  if (divisionIndex.length > 0) {

  }
  if (additionIndex.length > 0) {

  }
  if (subtractionIndex.length > 0) {

  }
}
import { Command } from "commander";

const program = new Command();

program.command('calc')
  .description('Calculate given numbers')
  .argument('<numbers...>', 'numbers to calc')
  .action(calcAction);

program.parse();
