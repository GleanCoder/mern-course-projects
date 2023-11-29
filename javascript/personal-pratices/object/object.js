// Create an Object.

let user = {
  name: "Aditya",
  age: 21,
};

// Access the properties of an Object by dot (.) Notation

// console.log(user.name);
// console.log(user.age);

// Add new property in the object
user.isStudent = true;

user.city = prompt("enter your City name:");

// Delete a property from the object
delete user.age;

// change the value of name
user.name = "Kiran";

// for in loop

for (let key in user) {
  console.log(key);
  console.log(user[key]);
}

console.log(user);
