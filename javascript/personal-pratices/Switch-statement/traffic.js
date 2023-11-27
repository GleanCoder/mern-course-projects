// Simulate a traffic light using a switch statement. The program should take the color as input and print a message indicating whether to stop, slow down, or go.

let userInput = prompt("Enter Light Color");
const color = String(userInput);

switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Slow Down");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("oops! You entered wrong color");
}
