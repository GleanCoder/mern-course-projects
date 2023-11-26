/* 
Create a program that takes a student's score as input and prints their grade based on the following criteria:

90 and above: A
80-89: B
70-79: C
60-69: D
Below 60: F

*/

const mark = 89;

if (mark >= 90) {
  console.log("Grade-A");
} else if (mark >= 80) {
  console.log("Grade-B");
} else if (mark >= 70) {
  console.log("Grade-C");
} else if (mark >= 60) {
  console.log("Grade-D");
} else {
  console.log("Grade F");
}
