// Write a program to find and print all prime numbers within the range of 1 to 50 using a loop.

let num = 50;
let counter = 0;

const primeChecker = function (j) {
  counter = 0;
  for (k = 2; k < j; k++) {
    if (j % k == 0) {
      counter++;
    }
  }
  if (counter > 0) {
    // console.log("no");
  } else {
    console.log(j);
  }
};
for (i = 2; i <= num; i++) {
  primeChecker(i);
}
