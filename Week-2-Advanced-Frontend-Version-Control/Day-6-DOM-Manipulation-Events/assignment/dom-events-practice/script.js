// ==============================
// 1. Counter App
// ==============================

let count = 0;

const counterValue = document.getElementById("counterValue");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

increaseBtn.addEventListener("click", function () {
  count++;
  counterValue.innerText = count;
});

decreaseBtn.addEventListener("click", function () {
  count--;
  counterValue.innerText = count;
});


// ==============================
// 2. Image Gallery
// ==============================

const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnails img");

thumbnails.forEach(function (thumbnail) {
  thumbnail.addEventListener("click", function () {
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
  });
});


// ==============================
// 3. Add Item + Clear All
// ==============================

const listInput = document.getElementById("listInput");
const addListItemBtn = document.getElementById("addListItemBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const customList = document.getElementById("customList");

addListItemBtn.addEventListener("click", function () {
  const itemText = listInput.value.trim();

  if (itemText === "") {
    alert("Please enter an item.");
    return;
  }

  const li = document.createElement("li");
  li.innerText = itemText;

  customList.appendChild(li);
  listInput.value = "";
});

clearAllBtn.addEventListener("click", function () {
  customList.innerHTML = "";
});


// ==============================
// 4. Character Counter
// ==============================

const messageBox = document.getElementById("messageBox");
const charCount = document.getElementById("charCount");

messageBox.addEventListener("keyup", function () {
  charCount.innerText = messageBox.value.length;
});