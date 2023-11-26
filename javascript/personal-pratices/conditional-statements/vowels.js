// Create a program that takes a single character as input and determines whether it's a vowel or a consonant.

let userInput = prompt("Enter Alphabate:");

let alphabate = String(userInput);

if (
  (alphabate == "a" && "e" && "i" && "o" && "U") ||
  (alphabate == "A" && "E" && "I" && "O" && "U")
) {
  console.log(`${alphabate}` + " " + "is Vowel");
} else {
  console.log(`${alphabate}` + " " + "is Consonant");
}
