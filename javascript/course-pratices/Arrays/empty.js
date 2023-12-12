// how to empty an array

let arr = [2, 3, 4, 5, 1];
console.log(arr);

// 1.

arr.length = 0;

console.log(arr);

// 2.

arr = [];
console.log(arr);

// 3.

arr.splice(0, arr.length);
console.log(arr);

// 4.
while (arr.length > 0) {
  arr.pop();
}
console.log(arr);
