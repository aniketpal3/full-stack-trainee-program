// ==============================
// 1. Fetch first 5 posts
// ==============================

const fetchPostsBtn = document.getElementById("fetchPostsBtn");
const postsOutput = document.getElementById("postsOutput");

fetchPostsBtn.addEventListener("click", async function () {
  postsOutput.innerHTML = "Fetching posts...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    const firstFivePosts = posts.slice(0, 5);

    postsOutput.innerHTML = "";

    firstFivePosts.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.className = "post-card";

      postDiv.innerHTML = `
        <strong>${post.id}. ${post.title}</strong>
      `;

      postsOutput.appendChild(postDiv);
    });
  } catch (error) {
    postsOutput.innerHTML = "Failed to fetch posts.";
    console.error(error);
  }
});


// ==============================
// 2. Simulate downloads
// ==============================

const downloadBtn = document.getElementById("downloadBtn");
const downloadOutput = document.getElementById("downloadOutput");

function simulateDownload(file) {
  const randomTime = Math.floor(Math.random() * 5) + 1;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${file} downloaded in ${randomTime} second(s)`);
    }, randomTime * 1000);
  });
}

downloadBtn.addEventListener("click", async function () {
  downloadOutput.innerHTML = "Starting downloads...<br>";

  const file1 = await simulateDownload("file-1.pdf");
  downloadOutput.innerHTML += file1 + "<br>";

  const file2 = await simulateDownload("file-2.jpg");
  downloadOutput.innerHTML += file2 + "<br>";

  const file3 = await simulateDownload("file-3.zip");
  downloadOutput.innerHTML += file3 + "<br>";

  downloadOutput.innerHTML += "<strong>All downloads completed.</strong>";
});


// ==============================
// 3. Display fake API users
// ==============================

const loadUsersBtn = document.getElementById("loadUsersBtn");
const usersOutput = document.getElementById("usersOutput");

loadUsersBtn.addEventListener("click", async function () {
  usersOutput.innerHTML = "Loading users...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    usersOutput.innerHTML = "";

    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.className = "user-card";

      userDiv.innerHTML = `
        <strong>${user.name}</strong><br>
        Email: ${user.email}
      `;

      usersOutput.appendChild(userDiv);
    });
  } catch (error) {
    usersOutput.innerHTML = "Failed to load users.";
    console.error(error);
  }
});


// ==============================
// 4. Simulated Weather Function
// ==============================

const weatherBtn = document.getElementById("weatherBtn");
const weatherOutput = document.getElementById("weatherOutput");

function getWeather(city) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Weather in ${city}: 28°C, Sunny`);
    }, 2000);
  });
}

weatherBtn.addEventListener("click", async function () {
  weatherOutput.innerHTML = "Fetching weather...";

  const weather = await getWeather("Lucknow");

  weatherOutput.innerHTML = weather;
});