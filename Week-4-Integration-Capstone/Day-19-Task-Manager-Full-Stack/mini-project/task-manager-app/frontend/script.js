const API = "http://localhost:3000/tasks";

const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

window.addEventListener("DOMContentLoaded", loadTasks);

async function loadTasks() {
  try {
    const response = await axios.get(API);

    const tasks = response.data;

    taskList.innerHTML = "";

    if (tasks.length === 0) {
      taskList.innerHTML = "<li>No tasks found.</li>";
      return;
    }

    tasks.forEach((task) => {
      const li = document.createElement("li");

      li.className = "task-item";

      li.innerHTML = `
        <div>
          <div class="task-title ${task.completed ? "completed" : ""}">
            ${task.title}
          </div>

          <div class="task-meta">
            Category: ${task.category} |
            User: ${task.userId} |
            Created: ${new Date(task.createdAt).toLocaleString()}
          </div>
        </div>

        <div class="task-actions">
          <button
            class="complete-btn"
            onclick="toggleTask('${task._id}', ${!task.completed})"
          >
            ${task.completed ? "Undo" : "Complete"}
          </button>

          <button
            class="edit-btn"
            onclick="editTask('${task._id}', '${task.title}')"
          >
            Edit
          </button>

          <button
            class="delete-btn"
            onclick="deleteTask('${task._id}')"
          >
            Delete
          </button>
        </div>
      `;

      taskList.appendChild(li);
    });

    message.innerText = "Tasks loaded successfully.";
    message.style.color = "green";
  } catch (error) {
    message.innerText = "Failed to load tasks. Make sure backend is running.";
    message.style.color = "red";
  }
}

async function addTask() {
  const title = document.getElementById("taskInput").value.trim();
  const category = document.getElementById("categoryInput").value;
  const userId = document.getElementById("userIdInput").value.trim();

  if (!title) {
    message.innerText = "Task title is required.";
    message.style.color = "red";
    return;
  }

  try {
    await axios.post(API, {
      title,
      category,
      userId
    });

    document.getElementById("taskInput").value = "";

    message.innerText = "Task added successfully.";
    message.style.color = "green";

    loadTasks();
  } catch (error) {
    message.innerText = "Failed to add task.";
    message.style.color = "red";
  }
}

async function toggleTask(id, completed) {
  try {
    await axios.put(`${API}/${id}`, {
      completed
    });

    loadTasks();
  } catch (error) {
    message.innerText = "Failed to update task.";
    message.style.color = "red";
  }
}

async function editTask(id, oldTitle) {
  const newTitle = prompt("Update task title:", oldTitle);

  if (!newTitle) return;

  try {
    await axios.put(`${API}/${id}`, {
      title: newTitle
    });

    message.innerText = "Task updated successfully.";
    message.style.color = "green";

    loadTasks();
  } catch (error) {
    message.innerText = "Failed to edit task.";
    message.style.color = "red";
  }
}

async function deleteTask(id) {
  const confirmDelete = confirm("Are you sure you want to delete this task?");

  if (!confirmDelete) return;

  try {
    await axios.delete(`${API}/${id}`);

    message.innerText = "Task deleted successfully.";
    message.style.color = "green";

    loadTasks();
  } catch (error) {
    message.innerText = "Failed to delete task.";
    message.style.color = "red";
  }
}