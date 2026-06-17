const API_URL = "http://localhost:5000/users";

const loadUsersBtn = document.getElementById("loadUsersBtn");
const usersTableBody = document.getElementById("usersTableBody");
const statusText = document.getElementById("status");

loadUsersBtn.addEventListener("click", loadUsers);

async function loadUsers() {
  usersTableBody.innerHTML = "";
  statusText.innerText = "Loading users...";

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();

    if (users.length === 0) {
      statusText.innerText = "No users found.";
      return;
    }

    users.forEach((user) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${user._id || user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.age || "N/A"}</td>
      `;

      usersTableBody.appendChild(row);
    });

    statusText.innerText = "Users loaded successfully.";
  } catch (error) {
    statusText.innerText = "Error loading users. Make sure backend is running.";
    console.error(error);
  }
}