// Combine Array

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
let combined = firstArray.concat(secondArray);
console.log(combined);

// slice Array
let sliced = combined.slice(2, 4);
console.log(sliced);

// combine array by ... spread operator

let combinedArray = [...firstArray, ...secondArray];

console.log(combinedArray);

let arr = ["a", "b", "c"];
let sarr = [...arr];
console.log(sarr);
