// Array to store all tasks
let tasks = [];

// Function to add task using input value
function addTaskFromInput() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  addTask(taskText);

  taskInput.value = "";
}

// Function to add task into array
function addTask(task) {
  let newTask = {
    title: task,
    completed: false
  };

  tasks.push(newTask);
  showTasks();
}

// Function to display all tasks
function showTasks() {
  let taskList = document.getElementById("taskList");
  let emptyMessage = document.getElementById("emptyMessage");

  taskList.innerHTML = "";

  if (tasks.length === 0) {
    emptyMessage.style.display = "block";
    return;
  }

  emptyMessage.style.display = "none";

  for (let i = 0; i < tasks.length; i++) {
    let listItem = document.createElement("li");

    let taskSpan = document.createElement("span");
    taskSpan.textContent = tasks[i].title;
    taskSpan.className = "task-text";

    if (tasks[i].completed) {
      taskSpan.classList.add("completed");
    }

    let actionsDiv = document.createElement("div");
    actionsDiv.className = "actions";

    let completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.className = "complete-btn";
    completeButton.onclick = function () {
      markTaskCompleted(i);
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function () {
      deleteTask(i);
    };

    actionsDiv.appendChild(completeButton);
    actionsDiv.appendChild(deleteButton);

    listItem.appendChild(taskSpan);
    listItem.appendChild(actionsDiv);

    taskList.appendChild(listItem);
  }
}

// Function to delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  showTasks();
}

// Function to mark task completed
function markTaskCompleted(index) {
  tasks[index].completed = true;
  showTasks();
}

// Initial display
showTasks();