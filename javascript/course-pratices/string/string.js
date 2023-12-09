// The belows are the primitive type Strings
const firstName = "Aditya Kiran";
const lastName = "Acharya";

// how to declare a object type string

const fullName = new String("Aditya Kiran Acharya");

console.log(fullName);

console.log(lastName.length);
console.log(lastName[2]);
console.log(lastName.includes("ry"));
console.log(lastName.indexOf("y"));
console.log(lastName.startsWith("Ac"));
console.log(lastName.endsWith("ya"));
console.log(lastName.toLowerCase());
console.log(lastName.toUpperCase());

console.log(lastName.trim()); //it doesn't trim the midlle space

console.log(lastName.replace("Acharya", "padhy"));

console.log(firstName.split(", "));
