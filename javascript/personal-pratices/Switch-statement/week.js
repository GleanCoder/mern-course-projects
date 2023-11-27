// Write a program that takes a day of the week as input and prints a message based on the day using a switch statement.
let userInput = prompt("Enter Day:");

switch (day.toLowerCase()) {
  case "monday":
    console.log("It's Monday");
    break;
  case "tuesday":
    console.log("It's Tuesday");
    break;
  case "wednesday":
    console.log("It's Wednesday");
    break;
  case "thursday":
    console.log("It's Thursday");
    break;
  case "friday":
    console.log("It's Friday");
    break;
  case "Saturday":
    console.log("It's Saturday");
    break;
  case "Sunday":
    console.log("It's Sunday");
    break;
  default:
    console.log("opps! You entered wrong day.");
}
