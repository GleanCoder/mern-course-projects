//Create an object representing a student with properties like name, age, and grade. Print out the student's information.

const student = {
  studentName: "Aditya",
  studentAge: 21,
  grade: "A",
};

for (let key in student) {
  console.log(key, student[key]);
}
