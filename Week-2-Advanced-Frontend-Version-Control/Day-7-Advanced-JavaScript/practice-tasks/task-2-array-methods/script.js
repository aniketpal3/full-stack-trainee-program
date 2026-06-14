let colors = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Purple"
];

// Add new color

colors.push("Orange");

// Remove first color

colors.shift();

let result = "";

colors.forEach(color => {
  result += color + "<br>";
});

document.getElementById("output")
.innerHTML = result;

console.log(colors);