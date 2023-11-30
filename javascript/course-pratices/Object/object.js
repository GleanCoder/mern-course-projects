let rectangle = {
  length: 10,
  breadth: 20,

  draw: function () {
    console.log("Kya Baat ay Object Method");
  },
};

// objects

const triangle = {
  height: 10,
  breadth: 5,
  area: function () {
    console.log("hey i'm area of Triangle");
  },
};
triangle.areaTri = "1/2*(breadth*height)";

delete triangle.areaTri;
console.log(triangle);

// factory function
function makeTriangle() {
  let triangle = {
    height: 15,
    breadth: 20,

    hello() {
      console.log("hello world");
    },
  };
  return triangle;
}
let triangleObj = makeTriangle();
console.log(triangleObj);
triangleObj.hello();
// *2
function userData(name, age) {
  return (user = {
    name,
    age,
  });
}
let firstUser = userData("Aditya", "21");
console.log(firstUser);

// constructor
function College(name, loc) {
  this.name = name;
  this.loction = loc;
  this.comment = function () {
    console.log(`${name}` + " " + "is located at" + " " + `${this.loction}`);
  };
}
let college1 = new College("RIT", "Berhampur");

console.log(college1);
college1.comment();

let college2 = new College("SCH", "Hinjilicut");
console.log(college2);
college2.comment();
// for-in Loop
let userInfo = {
  name: "Aditya",
  age: 21,
  address: "Aska",

  about: function () {
    console.log("Hello Dev.");
  },
};

for (let key in userInfo) {
  console.log(key, userInfo[key]);
}
// For of Loop
userInfo = {
  name: "Tony",
  age: 21,
  address: "Marvel",

  about: function () {
    console.log("Hello Dev.");
  },
};

for (let key of Object.entries(userInfo)) {
  console.log(key);
}

// Object Cloning

// #1- Iteration Methods

let collegeDb = {
  department: "MCA",
  college: "RIT",
  address: "Berhampur",
};

let cloneCollege = {};

for (let key in collegeDb) {
  cloneCollege[key] = collegeDb[key];
}

cloneCollege.college = "NIST";
cloneCollege.department = "B.Tech";
console.log(cloneCollege);
console.log(collegeDb);

// #2- assign Methods
let src = {
  a: 10,
  b: 20,
};

let dest = Object.assign({}, src);
console.log(dest);

src.a++;
console.log(src);
console.log(dest);

// #3- Spread Operator

let source = {
  a: 0,
  b: 5,
};

let des = { ...source };

console.log(des);
des.a++;
console.log(des);
