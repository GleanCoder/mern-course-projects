// Write a program that takes three angles as input and determines whether they form an acute, obtuse, or right-angled triangle.
let userFirstInput = prompt("Enter First Angle size:");
let userSecondInput = prompt("Enter Second Angle Size:");
let userThirdInput = prompt("Enter Third Angle Size:");

const firstAngle = parseFloat(userFirstInput);
const secondAngle = parseFloat(userSecondInput);
const thirdAngle = parseFloat(userThirdInput);

if (firstAngle + secondAngle + thirdAngle) {
  if (firstAngle === 90 || secondAngle === 90 || thirdAngle === 90) {
    console.log("It is Right-Angled Triangle");
  } else if (firstAngle > 90 || secondAngle > 90 || thirdAngle > 90) {
    console.log("It is a Obtuse Triangle");
  } else {
    console.log("It is a Acute Triangle");
  }
} else {
  console.log("Opps! You have Entered Wrong values");
}
