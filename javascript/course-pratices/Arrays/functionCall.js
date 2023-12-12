// array object

let student = [
  { rollNo: 1201, studentName: "Aditya Kiran" },
  { rollNo: 1207, studentName: "Kiran" },
  { rollNo: 1202, studentName: "Aditya Prasad" },
];

// CallBack Function

let course = student.find(function (detail) {
  return detail.rollNo == 1202;
});

console.log(course);

// Arrow function

let detail = student.find((detail) => detail.rollNo == 1207);

console.log(detail);

// Example-2

const interviewStage = [
  { round: 1, company: "Google" },
  { round: 2, company: "Microsoft" },
  { round: 3, company: "Cisco" },
];

// callback Function

let process = interviewStage.find(function (stage) {
  return stage.round == 1;
});
console.log(process);

// Arrow Function
process = interviewStage.find((stage) => stage.round == 3);

console.log(process);
