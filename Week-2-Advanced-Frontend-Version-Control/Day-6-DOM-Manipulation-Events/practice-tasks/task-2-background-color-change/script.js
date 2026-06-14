const button =
  document.getElementById("changeColorBtn");

button.addEventListener("click", function () {

  const colors = [
    "#ffadad",
    "#ffd6a5",
    "#fdffb6",
    "#caffbf",
    "#9bf6ff",
    "#a0c4ff",
    "#bdb2ff"
  ];

  const randomIndex =
    Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor =
    colors[randomIndex];

});