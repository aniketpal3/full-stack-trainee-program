let students = [
  {
    name: "Rahul",
    age: 22,
    marks: 85
  },
  {
    name: "Aditi",
    age: 21,
    marks: 92
  },
  {
    name: "Aman",
    age: 23,
    marks: 76
  }
];

const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const marksInput = document.getElementById("marksInput");
const addStudentBtn = document.getElementById("addStudentBtn");

const allStudentsDiv = document.getElementById("allStudents");
const toppersDiv = document.getElementById("toppers");
const averageDiv = document.getElementById("average");

function showAllStudents() {
  allStudentsDiv.innerHTML = "";

  students.forEach(student => {
    const studentItem = document.createElement("div");
    studentItem.className = "student-item";

    studentItem.innerHTML =
      `<strong>${student.name}</strong><br>
       Age: ${student.age}<br>
       Marks: ${student.marks}`;

    allStudentsDiv.appendChild(studentItem);
  });
}

function showToppers() {
  toppersDiv.innerHTML = "";

  const toppers = students.filter(student => student.marks >= 80);

  if (toppers.length === 0) {
    toppersDiv.innerHTML = "No toppers found.";
    return;
  }

  toppers.forEach(student => {
    const topperItem = document.createElement("div");
    topperItem.className = "student-item topper";

    topperItem.innerHTML =
      `${student.name} - ${student.marks}`;

    toppersDiv.appendChild(topperItem);
  });
}

function showAverage() {
  const totalMarks = students.reduce((total, student) => {
    return total + student.marks;
  }, 0);

  const average =
    totalMarks / students.length;

  averageDiv.innerHTML =
    `Class Average: ${average.toFixed(2)}`;
}

function renderStudentRecords() {
  showAllStudents();
  showToppers();
  showAverage();
}

function addStudent() {
  const name = nameInput.value.trim();
  const age = Number(ageInput.value);
  const marks = Number(marksInput.value);

  if (name === "" || age <= 0 || marks < 0 || marks > 100) {
    alert("Please enter valid student details.");
    return;
  }

  const newStudent = {
    name,
    age,
    marks
  };

  students.push(newStudent);

  nameInput.value = "";
  ageInput.value = "";
  marksInput.value = "";

  renderStudentRecords();
}

addStudentBtn.addEventListener("click", addStudent);

renderStudentRecords();