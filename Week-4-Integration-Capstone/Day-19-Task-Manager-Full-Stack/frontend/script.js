const API =
  "http://localhost:3000/tasks";

const taskList =
  document.getElementById("taskList");

const message =
  document.getElementById("message");

// Load Tasks
async function loadTasks() {

  try {

    const response =
      await axios.get(API);

    const tasks =
      response.data;

    taskList.innerHTML = "";

    tasks.forEach(task => {

      const li =
        document.createElement("li");

      li.classList.add(
        "task-item"
      );

      li.innerHTML = `
        <div class="task-details">

          <span class="${
            task.completed
            ? "completed"
            : ""
          }">

            ${task.title}

          </span>

          <br>

          <small>
            Category:
            ${task.category}
          </small>

        </div>

        <div class="task-actions">

          <button
            class="complete-btn"
            onclick="
              toggleTask(
                '${task._id}',
                ${!task.completed}
              )
            "
          >
            ${
              task.completed
              ? "Undo"
              : "Complete"
            }
          </button>

          <button
            class="edit-btn"
            onclick="
              editTask(
                '${task._id}',
                '${task.title}'
              )
            "
          >
            Edit
          </button>

          <button
            class="delete-btn"
            onclick="
              deleteTask(
                '${task._id}'
              )
            "
          >
            Delete
          </button>

        </div>
      `;

      taskList.appendChild(li);

    });

  } catch (error) {

    message.innerText =
      "Failed to load tasks";

    message.style.color =
      "red";

  }
}

// Add Task
async function addTask() {

  const taskTitle =
    document
    .getElementById("taskInput")
    .value
    .trim();

  const category =
    document
    .getElementById("categoryInput")
    .value;

  if (!taskTitle) {

    message.innerText =
      "Task title required";

    message.style.color =
      "red";

    return;
  }

  try {

    await axios.post(
      API,
      {
        title: taskTitle,
        category
      }
    );

    document
      .getElementById(
        "taskInput"
      ).value = "";

    message.innerText =
      "Task Added";

    message.style.color =
      "green";

    loadTasks();

  } catch (error) {

    message.innerText =
      "Failed to add task";

    message.style.color =
      "red";
  }
}

// Toggle Complete
async function toggleTask(
  id,
  completed
) {

  try {

    await axios.put(
      `${API}/${id}`,
      {
        completed
      }
    );

    loadTasks();

  } catch (error) {

    console.log(error);

  }
}

// Edit Task
async function editTask(
  id,
  oldTitle
) {

  const newTitle =
    prompt(
      "Update task",
      oldTitle
    );

  if (!newTitle) return;

  try {

    await axios.put(
      `${API}/${id}`,
      {
        title: newTitle
      }
    );

    loadTasks();

  } catch (error) {

    console.log(error);

  }
}

// Delete Task
async function deleteTask(
  id
) {

  const confirmDelete =
    confirm(
      "Delete Task?"
    );

  if (!confirmDelete)
    return;

  try {

    await axios.delete(
      `${API}/${id}`
    );

    loadTasks();

  } catch (error) {

    console.log(error);

  }
}

// Initial Load
loadTasks();