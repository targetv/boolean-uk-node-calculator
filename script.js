const input = process.argv;
const firstNum = Number(input[2]);
// console.log(input[3]);
// console.log(input[4]);
// console.log(input[2]);

const operator = input[3];
const secondNum = Number(input[4]);

function calculate(firstNumber, symbol, secondNumber) {
  let sum = 0;

  if (symbol === "x" || symbol === "times") {
    sum = firstNumber * secondNumber;
  } else if (symbol === "+" || symbol === "add") {
    sum = firstNumber + secondNumber;
  } else if (symbol === "-" || symbol === "minus") {
    sum = firstNumber - secondNumber;
  } else {
    return console.log("Invalid symbol");
  }

  return sum;
}

console.log(calculate(firstNum, operator, secondNum));
