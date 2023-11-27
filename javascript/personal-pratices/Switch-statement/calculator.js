// Implement a simple calculator that takes two numbers and an operator (+, -, *, /) as input. Use a switch statement to perform the corresponding operation.

"use strict";

let userFirstNum = prompt("Enter First Number:");
let userSecondNum = prompt("Enter Second Number:");

let userOperator = prompt("Enter the Operator:");

const firstNum = parseFloat(userFirstNum);
const secondNum = parseFloat(userSecondNum);

let result;

switch (userOperator) {
  case "+":
    result = firstNum + secondNum;
    console.log(result);
    break;
  case "-":
    result = firstNum - secondNum;
    console.log(result);
    break;
  case "*":
    result = firstNum * secondNum;
    console.log(result);
    break;
  case "/":
    result = firstNum / secondNum;
    console.log(result);
    break;
  default:
    console.log("Opps!");
}
