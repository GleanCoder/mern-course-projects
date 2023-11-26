// Write a program that takes three numbers as input and prints the largest one.

let userFirstNum = prompt("Enter First Number:");
let userSecondNum = prompt("Enter Second Number:");
let userThirdNum = prompt("Enter Third Number");

let firstNum = parseFloat(userFirstNum);
let secondNum = parseFloat(userSecondNum);
let thirdNum = parseFloat(userThirdNum);

if (firstNum > secondNum && firstNum > thirdNum) {
  console.log(`${firstNum}` + " " + "is Greater");
} else if (secondNum > firstNum && secondNum > thirdNum) {
  console.log(`${secondNum}` + " " + "is Greater");
} else {
  console.log(`${thirdNumNum}` + " " + "is Greater");
}
