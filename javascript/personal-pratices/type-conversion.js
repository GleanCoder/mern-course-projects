// 1. Convert a string "42" to a number explicitly.

const stringValue = "42";
const numberValue = Number(stringValue);
console.log(typeof numberValue);

//2. Convert the string "123" to a number.
const stringValue1 = "123";
const numberValue1 = Number(stringValue1);
console.log(typeof numberValue1);

//3. Convert the number 42 to a string.
const numberValue2 = 42;
const stringValue2 = String(numberValue2);
console.log(typeof stringValue2);

//4.Convert the string "true" to a boolean.
const stringValue3 = "true";
const booleanValue = Boolean(stringValue3);
console.log(typeof booleanValue);

//5.Convert the boolean false to a string.
const stringValue4 = "false";
const booleanValue1 = Boolean(stringValue4);
console.log(typeof booleanValue1);

//6.Convert an empty string to a boolean and check its truthiness.
const stringValue5 = "";
const booleanValue2 = Boolean(stringValue5);
console.log(typeof booleanValue2);

//7. Write a program that converts a user-input string to a number.
let stringValue6 = prompt("Enter a String Value: ");
const numberValue3 = Number(stringValue6);
console.log(typeof numberValue3);

//8.Convert a variable with a value of null to a string.
const nullValue = null;
const stringValue7 = String(nullValue);
console.log(typeof stringValue7);

//9. Convert an undefined variable to a boolean.
let undefinedValue;
const booleanValue3 = Boolean(undefinedValue);
console.log(booleanValue3);

//10.Concatenate a string and a number, then convert the result to uppercase. And Check the type of the final result.

const StringValue8 = "aditya";
const numberValue4 = 143;
const addValue = StringValue8 + numberValue4;
console.log(addValue);
const upperCaseValue = addValue.toUpperCase();
console.log(upperCaseValue);
console.log(typeof upperCaseValue);
