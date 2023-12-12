// Creation of array:

let numberArray = [1, 2, 3, 4];
console.log(numberArray);

// Insertion in array

// 1. in the End: (Push)

numberArray.push(5);
console.log(numberArray);

// 2. In the Beginning (Unshift)

numberArray.unshift(0);
console.log(numberArray);

// 3. In the middle: (Splice)

// array.splice (indexNo.,No. of element deletion,elements)

numberArray.splice(6, 0, 6, 7);
console.log(numberArray);
