"use strict";

//Q.1:  Write a function that takes two numbers as arguments and returns their sum.

function addition(firstNum, secondNum) {
  return firstNum + secondNum;
}
console.log(addition(2, 3));

//Q.2: Write a function that takes a string as an argument and returns its length.

function lengthCounter(StringName) {
  return StringName.length;
}

console.log(lengthCounter("Aditya"));

//Q.3: Write a program that takes two numbers and displays their sum, difference, product, and quotient.

const num1 = Number(20);
const num2 = Number(10);
const sum = num1 + num2;
const diff = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;
console.log(`Sum: ${sum}`);
console.log(`Difference: ${diff}`);
console.log(`Product: ${product}`);
console.log(`Quotient ${quotient}`);

//Q.4: Write a function that takes two numbers as arguments and returns the larger number.

function numFinder(num1, num2) {
  const finder = num1 > num2 ? num1 : num2;
  return finder;
}
console.log(`Larger Number: ${numFinder(4, 5)}`);

// Q.5: Write a program that displays a string in reverse order.

// Q.6: Write a program that takes a number and checks whether it is positive, negative, or zero.

function numberCheck(num) {
  const num1 = Number(num);
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "zero";
  }
}

console.log(numberCheck(-1));

// Q.7: Write a program that takes a number and prints the multiplication table for that number.

// const num = Number(prompt("Enter a number"));
// for (let mul = 1; mul <= 10; mul++) {
//   let mult = mul * num;
//   console.log(mult);
// }

function mulTable(number) {
  for (let i = 1; i <= 10; i++) {
    const results = number * i;
    console.log(`${number} * ${i} = ${results}`);
  }
}

mulTable(4);

//Q.8: Write a program that takes a number and calculates the sum of all numbers from 1 to that number.
function calculateSum(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  console.log(sum);
}
calculateSum(5);

// Q.9: Write a program that takes a string and prints out the number of vowels in the string.
