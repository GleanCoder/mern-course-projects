let numbers = [-2, 0, 1, 3, -4];

let filtered = numbers.filter(function (value) {
  return value < 0;
});
console.log(filtered);

let posFilter = numbers.filter((value) => value > 0);
console.log(posFilter);
