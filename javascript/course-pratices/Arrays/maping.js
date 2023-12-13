let numbers = [1, 2, 3, 4, 15];

// let item = numbers.map(function (value) {
//   return "roll_No:" + value;
// });

let item = numbers.map((value) => "student_No_" + value);
// console.log(item);

// Mapping with Objects

let arr = [0, -1, -4, 3, 8];
let filtered = arr.filter((numbers) => numbers > 0);
let mapping = filtered.map(function (num) {
  return { value: num };
});

// console.log(mapping);

// Chaining

let items = arr
  .filter(function (numbers) {
    return numbers > 0;
  })

  .map(function (values) {
    return { value: values };
  });

console.log(items);
