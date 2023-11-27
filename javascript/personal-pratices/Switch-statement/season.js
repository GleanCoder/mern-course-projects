// Create a program that takes a month as input and uses a switch statement to determine and print the season of that month.

let month = prompt("Enter Month Name:");

switch (month.toLowerCase()) {
  case "december":
  case "january":
  case "february":
    console.log("Winter");
    break;
  case "march":
  case "april":
  case "may":
    console.log("Summer");
    break;
  case "june":
  case "july":
  case "august":
  case "september":
    console.log("Rainy");
    break;
  case "october":
  case "november":
    console.log("Autumn");
    break;
  default:
    console.log("Opps!");
}
