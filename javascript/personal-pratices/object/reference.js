// primitive Datatype

let userName = "Aditya";
let name2 = userName;
userName = "Hello";
console.log(userName);
console.log(name2);

// Reference Datatype
let user = {
  name: "Aditya",
  age: 21,
};

let user2 = user;
user2.name = "Kiran";
console.log(user2);
console.log(user);
