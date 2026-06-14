const textInput = document.getElementById("textInput");
const previewText = document.getElementById("previewText");

textInput.addEventListener("keyup", function () {
  previewText.innerText = textInput.value;
});