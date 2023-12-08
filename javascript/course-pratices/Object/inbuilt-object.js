// math.pi
console.log(Math.PI);

function circleRadius(radius) {
  return 2 * Math.PI * radius;
}

console.log(circleRadius(2));

// Generate random number

function randomNum(num) {
  return Math.random() * num;
}
console.log(randomNum(0));

console.log(Math.random());

// Find Min Max

const firstNum = 22;
const secondNum = 19;
const thirdNum = 27;

console.log(Math.max(firstNum, secondNum, thirdNum));
console.log(Math.min(thirdNum, firstNum, secondNum));
