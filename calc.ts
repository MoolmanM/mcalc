function linearSearch(arr: string[], target: string): number[] {
  const outputArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      outputArr.push(i)
    }
  }
  return outputArr
}

export function calc(inputArr: string[]): number {
  let total = 0;
  const parenthesesIndex = linearSearch(inputArr, "(");
  const exponenetsIndex = linearSearch(inputArr, "*");
  const multiplicationIndex = linearSearch(inputArr, "*");
  const divisionIndex = linearSearch(inputArr, "/");
  const additionIndex = linearSearch(inputArr, "+");
  const subtractionIndex = linearSearch(inputArr, "-");

  if (parenthesesIndex.length > 0) {

  }
  if (exponenetsIndex.length > 0) {

  }
  if (multiplicationIndex.length > 0) {
    for (let i = 0; i < multiplicationIndex.length; i++) {
      const left = Number(inputArr[multiplicationIndex[i] - 1]);
      const right = Number(inputArr[multiplicationIndex[i] + 1]);
      total = left * right;
      inputArr[multiplicationIndex[i] - 1] = total.toString();
      inputArr.splice(multiplicationIndex[i], 2)
    }
  }
  if (divisionIndex.length > 0) {

  }
  if (additionIndex.length > 0) {
    for (let i = 0; i < additionIndex.length; i++) {
      const left = Number(inputArr[additionIndex[i] - 1]);
      const right = Number(inputArr[additionIndex[i] + 1]);
      total = left + right;
      inputArr[additionIndex[i] - 1] = total.toString();
      inputArr.splice(additionIndex[i], 2)
    }

  }
  if (subtractionIndex.length > 0) {

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
