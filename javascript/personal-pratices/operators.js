// OPERATORS

// 1. Write a program to add two numbers.
let firstNumber = 10;
let secondNumber = 5;
let sum = firstNumber + secondNumber;
console.log(sum);

// 2. Implement a program to subtract two numbers.
firstNumber = 15;
secondNumber = 5;
let sub = firstNumber - secondNumber;
console.log(sub);

// 3. Create a program to multiply two numbers.
let mul = firstNumber * secondNumber;
console.log(mul);

// 4. Write a program to divide two numbers.
let division = firstNumber / secondNumber;
console.log(division);

//5. Implement a program to find the remainder of the division of two numbers.
let reminder = firstNumber % secondNumber;
console.log(reminder);

// 6. Create a program to increment a variable by 1.
firstNumber = 5;
firstNumber += 1;
console.log(firstNumber);

// 7. Write a program to decrement a variable by 1.
firstNumber -= 1;

console.log(firstNumber);

// 8. Implement a program to calculate the area of a rectangle.
const rectWidth = 10;
const rectLength = 10;
const rectArea = rectLength * rectWidth;
console.log(rectArea);

// 9. Create a program to calculate the area of a circle.
const circleRadius = 10;
const PI = 3.141;
const circleArea = PI * circleRadius ** 2;
console.log(circleArea);

// 10. Write a program to swap the values of two variables without using a third variable.
firstNumber = 10;
secondNumber = 15;
firstNumber = firstNumber + secondNumber;
secondNumber = firstNumber - secondNumber;
firstNumber = firstNumber - secondNumber;
console.log(firstNumber, secondNumber);
