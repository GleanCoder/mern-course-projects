// Create a program that takes a number as input and determines whether it's positive, negative, or zero.

let userInput = prompt("Enter a Number:");

let number = parseFloat(userInput);

if (number > 0) {
  console.log(`${number}` + "  " + "is a Positive Number");
} else if (number < 0) {
  console.log(`${number}` + " " + "is a Negative Number");
} else {
  console.log(" is Zero");
}
