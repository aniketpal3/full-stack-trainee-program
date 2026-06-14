const marks = [50, 70, 40, 90, 30];

const passedMarks = marks.filter(mark => mark >= 50);

const bonusMarks = marks.map(mark => mark + 5);

const totalMarks = marks.reduce((total, mark) => {
  return total + mark;
}, 0);

document.getElementById("original").innerHTML =
  marks.join(", ");

document.getElementById("passed").innerHTML =
  passedMarks.join(", ");

document.getElementById("bonus").innerHTML =
  bonusMarks.join(", ");

document.getElementById("total").innerHTML =
  totalMarks;

console.log("Original Marks:", marks);
console.log("Passed Marks:", passedMarks);
console.log("Bonus Marks:", bonusMarks);
console.log("Total Marks:", totalMarks);