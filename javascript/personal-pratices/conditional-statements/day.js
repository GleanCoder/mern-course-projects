// Write a program that takes a number (1-7) as input and prints the corresponding day of the week.
let userInput = prompt("Enter your number:");
let day = Number(userInput);
if (day == 1) {
  console.log(`${day}` + " " + "is Sunday");
} else if (day == 2) {
  console.log(`${day}` + " " + "is Monday");
} else if (day == 3) {
  console.log(`${day}` + " " + "is Tuesday");
} else if (day == 4) {
  console.log(`${day}` + " " + "is WednesDay");
} else if (day == 5) {
  console.log(`${day}` + " " + "is Thursday");
} else if (day == 6) {
  console.log(`${day}` + " " + "is Friday");
} else if (day == 7) {
  console.log(`${day}` + " " + "is Saturday");
} else {
  console.log(`${day}` + " " + "is not exist in a Week");
}
