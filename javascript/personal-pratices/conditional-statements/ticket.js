/* 
Create a program that asks the user for their age and determines the ticket price for a movie:

Below 12: $5
12-17: $8
18-64: $12
65 and above: $6

*/

let userInput = prompt("Enter your Age:");
let age = Number(userInput);
if (age < 12) {
  console.log("Your Ticket price is $5");
} else if (age >= 12 && age < 18) {
  console.log("your Ticket price is $8");
} else if (age >= 18 && age <= 64) {
  console.log("your Ticket price is $12");
} else {
  console.log("Your Ticket price is $6");
}
