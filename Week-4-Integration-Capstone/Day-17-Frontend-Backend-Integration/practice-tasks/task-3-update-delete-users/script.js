const API_URL = "http://localhost:5000/users";

const loadUsersBtn =
  document.getElementById("loadUsersBtn");

const usersTableBody =
  document.getElementById("usersTableBody");

const status =
  document.getElementById("status");

loadUsersBtn.addEventListener(
  "click",
  loadUsers
);

async function loadUsers() {
  try {
    const response =
      await axios.get(API_URL);

    const users = response.data;

    usersTableBody.innerHTML = "";

    users.forEach(user => {
      const row =
        document.createElement("tr");

      row.innerHTML = `
        <td>${user._id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.age || "N/A"}</td>

        <td>
          <button
            class="edit-btn"
            onclick="editUser('${user._id}')"
          >
            Edit
          </button>

          <button
            class="delete-btn"
            onclick="deleteUser('${user._id}')"
          >
            Delete
          </button>
        </td>
      `;

      usersTableBody.appendChild(row);
    });

    status.innerText =
      "Users loaded successfully";
  } catch (error) {
    status.innerText =
      "Failed to load users";
  }
}

async function editUser(id) {
  const newName =
    prompt("Enter new name");

  if (!newName) return;

  try {
    await axios.put(
      `${API_URL}/${id}`,
      {
        name: newName
      }
    );

    loadUsers();
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(id) {
  const confirmDelete =
    confirm("Delete this user?");

  if (!confirmDelete) return;

  try {
    await axios.delete(
      `${API_URL}/${id}`
    );

    loadUsers();
  } catch (error) {
    console.log(error);
  }
}