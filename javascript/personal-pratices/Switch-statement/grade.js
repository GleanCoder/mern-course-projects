// Write a program that takes a numerical grade as input and uses a switch statement to output the corresponding letter grade (A, B, C, D, or F).

let mark = 90;

switch (true) {
  case mark >= 90:
    console.log("A");
    break;
  case mark >= 80:
  case mark < 90:
    console.log("B");
    break;
  case mark >= 70:
  case mark < 80:
    console.log("C");
    break;
  case mark >= 60:
  case mark < 70:
    console.log("D");
    break;
  case mark < 60:
    console.log("E");
  default:
    console.log("Opps!");
}
