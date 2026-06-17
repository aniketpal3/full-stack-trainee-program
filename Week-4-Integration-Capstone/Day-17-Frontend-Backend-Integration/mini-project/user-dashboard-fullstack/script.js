const API_URL = "http://localhost:5000/users";

const userForm = document.getElementById("userForm");
const usersTableBody = document.getElementById("usersTableBody");
const message = document.getElementById("message");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const loadBtn = document.getElementById("loadBtn");

window.addEventListener("DOMContentLoaded", loadUsers);
userForm.addEventListener("submit", addUser);
searchBtn.addEventListener("click", searchUsers);
loadBtn.addEventListener("click", loadUsers);

async function loadUsers() {
  try {
    const response = await axios.get(API_URL);
    renderUsers(response.data);
    message.innerText = "Users loaded successfully.";
    message.style.color = "green";
  } catch (error) {
    message.innerText = "Failed to load users. Make sure backend is running.";
    message.style.color = "red";
  }
}

async function addUser(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();

  if (!name || !email || !age) {
    message.innerText = "All fields are required.";
    message.style.color = "red";
    return;
  }

  try {
    await axios.post(API_URL, {
      name,
      email,
      age: Number(age)
    });

    message.innerText = "User added successfully.";
    message.style.color = "green";

    userForm.reset();
    loadUsers();
  } catch (error) {
    message.innerText = error.response?.data?.error || "Failed to add user.";
    message.style.color = "red";
  }
}

function renderUsers(users) {
  usersTableBody.innerHTML = "";

  if (users.length === 0) {
    usersTableBody.innerHTML = `
      <tr>
        <td colspan="5">No users found.</td>
      </tr>
    `;
    return;
  }

  users.forEach((user) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${user._id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.age || "N/A"}</td>
      <td>
        <button class="edit-btn" onclick="editUser('${user._id}')">Edit</button>
        <button class="delete-btn" onclick="deleteUser('${user._id}')">Delete</button>
      </td>
    `;

    usersTableBody.appendChild(row);
  });
}

async function editUser(id) {
  const newName = prompt("Enter updated name:");

  if (!newName) return;

  try {
    await axios.put(`${API_URL}/${id}`, {
      name: newName
    });

    message.innerText = "User updated successfully.";
    message.style.color = "green";

    loadUsers();
  } catch (error) {
    message.innerText = "Failed to update user.";
    message.style.color = "red";
  }
}

async function deleteUser(id) {
  const confirmDelete = confirm("Are you sure you want to delete this user?");

  if (!confirmDelete) return;

  try {
    await axios.delete(`${API_URL}/${id}`);

    message.innerText = "User deleted successfully.";
    message.style.color = "green";

    loadUsers();
  } catch (error) {
    message.innerText = "Failed to delete user.";
    message.style.color = "red";
  }
}

async function searchUsers() {
  const searchValue = searchInput.value.trim().toLowerCase();

  if (!searchValue) {
    loadUsers();
    return;
  }

  try {
    const response = await axios.get(API_URL);
    const filteredUsers = response.data.filter((user) =>
      user.name.toLowerCase().includes(searchValue)
    );

    renderUsers(filteredUsers);

    message.innerText = "Search completed.";
    message.style.color = "green";
  } catch (error) {
    message.innerText = "Search failed.";
    message.style.color = "red";
  }
}