// ==============================
// 1. Even numbers using filter()
// ==============================

const numbers = [12, 7, 9, 20, 33, 42, 55, 68];

const evenNumbers = numbers.filter(number => number % 2 === 0);

document.getElementById("evenNumbers").innerHTML =
  `Original Numbers: ${numbers.join(", ")}<br>
   Even Numbers: ${evenNumbers.join(", ")}`;

console.log("Even Numbers:", evenNumbers);


// ==============================
// 2. Laptop Object with Method
// ==============================

const laptop = {
  brand: "HP",
  ram: "16GB",
  price: 55000,

  details: function () {
    return `Brand: ${this.brand}<br>RAM: ${this.ram}<br>Price: ₹${this.price}`;
  }
};

document.getElementById("laptopDetails").innerHTML =
  laptop.details();

console.log(laptop);


// ==============================
// 3. Highest, Lowest, Average Marks
// ==============================

const marks = [78, 92, 67, 88, 95, 73];

const highest = Math.max(...marks);
const lowest = Math.min(...marks);

const total = marks.reduce((sum, mark) => sum + mark, 0);
const average = total / marks.length;

document.getElementById("marksAnalysis").innerHTML =
  `Marks: ${marks.join(", ")}<br>
   Highest Marks: ${highest}<br>
   Lowest Marks: ${lowest}<br>
   Average Marks: ${average.toFixed(2)}`;

console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Average:", average);


// ==============================
// 4. addStudent() Function Demo
// ==============================

const students = [
  {
    name: "Rahul",
    marks: 85
  },
  {
    name: "Aditi",
    marks: 92
  }
];

function addStudent(name, marks) {
  students.push({
    name: name,
    marks: marks
  });
}

addStudent("Aman", 76);

let studentOutput = "";

students.forEach(student => {
  studentOutput += `${student.name} - ${student.marks}<br>`;
});

document.getElementById("studentOutput").innerHTML =
  studentOutput;

console.log("Students:", students);