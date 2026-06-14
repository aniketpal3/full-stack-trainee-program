// Arrow Function

const introduce = (name, age) => {
  return `My name is ${name} and I am ${age} years old.`;
};

// Template Literal

const message =
  introduce("Aniket", 22);

document.getElementById("output")
.innerHTML = message;

console.log(message);

// Destructuring Example

const student = {
  studentName: "Rahul",
  course: "Full Stack"
};

const {
  studentName,
  course
} = student;

console.log(studentName);
console.log(course);

// Spread Operator Example

const nums = [1, 2, 3];

const newNums = [
  ...nums,
  4,
  5
];

console.log(newNums);