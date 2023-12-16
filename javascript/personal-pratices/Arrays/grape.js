/* 
1.Create an array with elements "apple," "banana," and "orange."
2.Add "grape" to the end of the array.
3.Remove the first element from the array.
4.Check if "banana" is included in the array.
*/

let fruits = ["apple", "banana", "orange"];

fruits.push("grape");

// console.log(fruits);

fruits.shift();
// console.log(fruits);

// console.log(fruits.includes("banana"));

/*
Array Iteration:
1.Use a loop to print each element of the array from question 1.
2.Create a new array with numbers from 1 to 5 and double each number using a loop.
*/

// for (values of fruits) {
//   console.log(values);
// }

let numArray = [1, 2, 3, 4, 5];

// for (values of numArray) {
//   numArray = values ** 2;
//   console.log(numArray);
// }

/*
Array Methods:
1.Use the join method to concatenate the elements of the array from question 1 into a single string separated by commas.
2.Use the indexOf method to find the index of "orange" in the array from question 1.
3.Use the slice method to create a new array with only the elements "banana" and "grape."

*/

// console.log(fruits.join(","));
// console.log(fruits.indexOf("orange"));

// console.log(fruits);

let newArray = fruits.slice(0, 1).concat(fruits.slice(2));

// console.log(newArray);

/*

1.Create an array of numbers and use the filter method to create a new array with only even numbers.
2.Use the map method to square each number in the array from question 10.
 */

let numbArray = [1, 2, 3, 5, 6, 7, 9, 12, 14, 13, 17];

// let filtered = numbArray.filter(function (value) {
//   if (value % 2 === 0) return value;
// });

let filtered = numbArray.filter((value) => value % 2 === 0);
// console.log(filtered);

// let maping = filtered.map(function (mapNum) {
//   return (mapNum = mapNum ** 2);
// });
// console.log(maping);

let maping = filtered.map((mapNum) => (mapNum = mapNum ** 2));
// console.log(maping);

// Chaining of filtered and maped the square of odd numbers
let fillMap = numbArray
  .filter((value) => value % 2 !== 0)
  .map((mapValue) => (mapValue = mapValue ** 2));

// console.log(fillMap);

/*
Array Sorting:
1.Create an array of words and sort them alphabetically.
2.Create an array of numbers and sort them in descending order.

*/
let nameArray = ["Bus", "car", "Aeroplane"];
// console.log(nameArray.sort());

let numbArray2 = [14, 26, 2, 6, 3, 9, 5];
numbArray2.sort((a, b) => a - b);
// console.log(numbArray2);
numbArray2.reverse((a, b) => b - a);
// console.log(numbArray2);
// numbArray2.reverse();
// console.log(numbArray2);

/*
Advanced Array Operations:
1.Use the reduce method to calculate the sum of an array of numbers.
2.Use the every method to check if all elements in an array are greater than 10.
*/

let sum = numbArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);

let greaterThan = (currentValue) => currentValue > 10;
let value = numbArray2.every(greaterThan);
console.log(value);
