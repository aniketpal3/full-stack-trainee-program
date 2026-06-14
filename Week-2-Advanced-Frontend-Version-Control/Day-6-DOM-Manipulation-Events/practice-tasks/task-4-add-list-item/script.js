const addItemBtn = document.getElementById("addItemBtn");
const itemList = document.getElementById("itemList");

let itemCount = 1;

addItemBtn.addEventListener("click", function () {
  const newItem = document.createElement("li");

  newItem.innerText = "New List Item " + itemCount;

  itemList.appendChild(newItem);

  itemCount++;
});