// Write a program that takes the current hour as input and prints "Good morning," "Good afternoon," or "Good evening" based on the time.

const time = 19;
if (time < 12) {
  console.log("Good Morning");
} else if (time >= 12 && time <= 18) {
  console.log("Good AfterNoon");
} else if (time > 18 && time <= 21) {
  console.log("Good Evening");
} else {
  console.log("you have Bad Time");
}
