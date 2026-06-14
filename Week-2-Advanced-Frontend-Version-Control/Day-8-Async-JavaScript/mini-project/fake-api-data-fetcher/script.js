const loadWithThenBtn = document.getElementById("loadWithThenBtn");
const loadWithAsyncBtn = document.getElementById("loadWithAsyncBtn");
const clearBtn = document.getElementById("clearBtn");

const statusText = document.getElementById("status");
const usersContainer = document.getElementById("usersContainer");

const API_URL = "https://jsonplaceholder.typicode.com/users";

function renderUsers(users) {
  usersContainer.innerHTML = "";

  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.className = "user-card";

    userCard.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Company:</strong> ${user.company.name}</p>
      <p><strong>City:</strong> ${user.address.city}</p>
    `;

    usersContainer.appendChild(userCard);
  });
}

// Version 1: Using Promises with then/catch
function loadUsersWithPromises() {
  statusText.innerText = "Loading users with Promises...";
  usersContainer.innerHTML = "";

  fetch(API_URL)
    .then((response) => response.json())
    .then((users) => {
      renderUsers(users);
      statusText.innerText = "Users loaded using Promises.";
    })
    .catch((error) => {
      statusText.innerText = "Failed to load users.";
      console.error(error);
    });
}

// Version 2: Using async/await
async function loadUsersWithAsyncAwait() {
  statusText.innerText = "Loading users with Async/Await...";
  usersContainer.innerHTML = "";

  try {
    const response = await fetch(API_URL);
    const users = await response.json();

    renderUsers(users);

    statusText.innerText = "Users loaded using Async/Await.";
  } catch (error) {
    statusText.innerText = "Failed to load users.";
    console.error(error);
  }
}

function clearUsers() {
  usersContainer.innerHTML = "";
  statusText.innerText = "";
}

loadWithThenBtn.addEventListener("click", loadUsersWithPromises);
loadWithAsyncBtn.addEventListener("click", loadUsersWithAsyncAwait);
clearBtn.addEventListener("click", clearUsers);