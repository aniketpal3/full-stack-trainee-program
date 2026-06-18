const API_URL = "http://localhost:5000/api";

const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const taskForm = document.getElementById("taskForm");
const logoutBtn = document.getElementById("logoutBtn");

const signupMessage = document.getElementById("signupMessage");
const loginMessage = document.getElementById("loginMessage");
const taskMessage = document.getElementById("taskMessage");

const taskList = document.getElementById("taskList");

if (signupForm) {
  signupForm.addEventListener("submit", signupUser);
}

if (loginForm) {
  loginForm.addEventListener("submit", loginUser);
}

if (taskForm) {
  taskForm.addEventListener("submit", createTask);
  loadProfile();
  loadTasks();
  loadStats();
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", logoutUser);
}

async function signupUser(event) {
  event.preventDefault();

  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  if (!name || !email || !password) {
    signupMessage.innerText = "All fields are required.";
    signupMessage.style.color = "red";
    return;
  }

  try {
    const response = await axios.post(`${API_URL}/auth/signup`, {
      name,
      email,
      password
    });

    signupMessage.innerText = response.data.message;
    signupMessage.style.color = "green";

    signupForm.reset();

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);
  } catch (error) {
    signupMessage.innerText = error.response?.data?.message || "Signup failed.";
    signupMessage.style.color = "red";
  }
}

async function loginUser(event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    loginMessage.innerText = "Email and password are required.";
    loginMessage.style.color = "red";
    return;
  }

  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password
    });

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));

    loginMessage.innerText = "Login successful.";
    loginMessage.style.color = "green";

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 800);
  } catch (error) {
    loginMessage.innerText = error.response?.data?.message || "Login failed.";
    loginMessage.style.color = "red";
  }
}

function getToken() {
  return localStorage.getItem("token");
}

function getAuthHeaders() {
  return {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  };
}

function checkAuth() {
  const token = getToken();

  if (!token) {
    window.location.href = "login.html";
  }
}

async function loadProfile() {
  checkAuth();

  try {
    const response = await axios.get(
      `${API_URL}/auth/profile`,
      getAuthHeaders()
    );

    const userName = document.getElementById("userName");

    if (userName) {
      userName.innerText = `Hello, ${response.data.user.name}`;
    }
  } catch (error) {
    logoutUser();
  }
}

async function createTask(event) {
  event.preventDefault();

  const title = document.getElementById("taskTitle").value.trim();
  const description = document.getElementById("taskDescription").value.trim();
  const category = document.getElementById("taskCategory").value;
  const dueDate = document.getElementById("taskDueDate").value;

  if (!title) {
    taskMessage.innerText = "Task title is required.";
    taskMessage.style.color = "red";
    return;
  }

  try {
    await axios.post(
      `${API_URL}/tasks`,
      {
        title,
        description,
        category,
        dueDate
      },
      getAuthHeaders()
    );

    taskMessage.innerText = "Task created successfully.";
    taskMessage.style.color = "green";

    taskForm.reset();

    loadTasks();
    loadStats();
  } catch (error) {
    taskMessage.innerText = error.response?.data?.message || "Task creation failed.";
    taskMessage.style.color = "red";
  }
}

async function loadTasks() {
  checkAuth();

  try {
    const response = await axios.get(
      `${API_URL}/tasks`,
      getAuthHeaders()
    );

    renderTasks(response.data);
  } catch (error) {
    taskList.innerHTML = "<p>Failed to load tasks.</p>";
  }
}

function renderTasks(tasks) {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = "<p>No tasks found. Add your first task.</p>";
    return;
  }

  tasks.forEach((task) => {
    const div = document.createElement("div");
    div.className = "task-item";

    div.innerHTML = `
      <div>
        <div class="task-title ${task.completed ? "completed" : ""}">
          ${task.title}
        </div>

        <div class="task-meta">
          ${task.description || "No description"}
        </div>

        <div class="task-meta">
          Category: ${task.category} |
          Due: ${task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "No due date"}
        </div>
      </div>

      <div class="task-actions">
        <button class="complete-btn" onclick="toggleTask('${task._id}', ${!task.completed})">
          ${task.completed ? "Undo" : "Complete"}
        </button>

        <button class="edit-btn" onclick="editTask('${task._id}', '${escapeText(task.title)}', '${escapeText(task.description || "")}')">
          Edit
        </button>

        <button class="delete-btn" onclick="deleteTask('${task._id}')">
          Delete
        </button>
      </div>
    `;

    taskList.appendChild(div);
  });
}

function escapeText(text) {
  return text.replace(/'/g, "\\'");
}

async function toggleTask(id, completed) {
  try {
    await axios.put(
      `${API_URL}/tasks/${id}`,
      { completed },
      getAuthHeaders()
    );

    loadTasks();
    loadStats();
  } catch (error) {
    alert("Failed to update task.");
  }
}

async function editTask(id, oldTitle, oldDescription) {
  const title = prompt("Update task title:", oldTitle);

  if (!title) return;

  const description = prompt("Update description:", oldDescription);

  try {
    await axios.put(
      `${API_URL}/tasks/${id}`,
      {
        title,
        description
      },
      getAuthHeaders()
    );

    loadTasks();
  } catch (error) {
    alert("Failed to edit task.");
  }
}

async function deleteTask(id) {
  const confirmDelete = confirm("Are you sure you want to delete this task?");

  if (!confirmDelete) return;

  try {
    await axios.delete(
      `${API_URL}/tasks/${id}`,
      getAuthHeaders()
    );

    loadTasks();
    loadStats();
  } catch (error) {
    alert("Failed to delete task.");
  }
}

async function loadStats() {
  try {
    const response = await axios.get(
      `${API_URL}/tasks/stats/summary`,
      getAuthHeaders()
    );

    document.getElementById("totalTasks").innerText = response.data.total;
    document.getElementById("completedTasks").innerText = response.data.completed;
    document.getElementById("pendingTasks").innerText = response.data.pending;
  } catch (error) {
    console.log("Stats error");
  }
}

function logoutUser() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "login.html";
}