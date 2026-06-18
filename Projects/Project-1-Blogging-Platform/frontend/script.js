const API = "http://localhost:5000/api";

const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const postsContainer = document.getElementById("postsContainer");
const postForm = document.getElementById("postForm");
const myPosts = document.getElementById("myPosts");
const singlePost = document.getElementById("singlePost");
const commentForm = document.getElementById("commentForm");
const commentsContainer = document.getElementById("commentsContainer");

if (signupForm) {
  signupForm.addEventListener("submit", signupUser);
}

if (loginForm) {
  loginForm.addEventListener("submit", loginUser);
}

if (postsContainer) {
  loadPosts();
}

if (postForm) {
  postForm.addEventListener("submit", createPost);
  loadMyPosts();
}

if (singlePost) {
  loadSinglePost();
}

if (commentForm) {
  commentForm.addEventListener("submit", addComment);
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

async function signupUser(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("signupMessage");

  if (!name || !email || !password) {
    message.innerText = "All fields are required.";
    message.style.color = "red";
    return;
  }

  try {
    const response = await axios.post(`${API}/auth/signup`, {
      name,
      email,
      password
    });

    message.innerText = response.data.message;
    message.style.color = "green";

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);
  } catch (error) {
    message.innerText = error.response?.data?.message || "Signup failed.";
    message.style.color = "red";
  }
}

async function loginUser(event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const message = document.getElementById("loginMessage");

  if (!email || !password) {
    message.innerText = "Email and password are required.";
    message.style.color = "red";
    return;
  }

  try {
    const response = await axios.post(`${API}/auth/login`, {
      email,
      password
    });

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));

    window.location.href = "dashboard.html";
  } catch (error) {
    message.innerText = error.response?.data?.message || "Login failed.";
    message.style.color = "red";
  }
}

async function loadPosts() {
  try {
    const response = await axios.get(`${API}/posts`);

    postsContainer.innerHTML = "";

    response.data.forEach((post) => {
      postsContainer.innerHTML += `
        <div class="post-card">
          <h3>${post.title}</h3>

          <p class="post-meta">
            Author: ${post.author?.name || "Unknown"} |
            Category: ${post.category || "General"}
          </p>

          <p>${post.content.substring(0, 120)}...</p>

          <a href="post.html?id=${post._id}">
            Read More
          </a>
        </div>
      `;
    });
  } catch (error) {
    postsContainer.innerHTML = "<p>Failed to load posts.</p>";
  }
}

async function createPost(event) {
  event.preventDefault();

  const token = getToken();

  if (!token) {
    alert("Please login first.");
    window.location.href = "login.html";
    return;
  }

  const title = document.getElementById("title").value.trim();
  const category = document.getElementById("category").value.trim();
  const content = document.getElementById("content").value.trim();

  if (!title || !content) {
    alert("Title and content are required.");
    return;
  }

  try {
    await axios.post(
      `${API}/posts`,
      {
        title,
        category,
        content
      },
      getAuthHeaders()
    );

    postForm.reset();
    loadMyPosts();
  } catch (error) {
    alert(error.response?.data?.message || "Post creation failed.");
  }
}

async function loadMyPosts() {
  const token = getToken();

  if (!token) {
    window.location.href = "login.html";
    return;
  }

  try {
    const response = await axios.get(
      `${API}/posts/my/posts`,
      getAuthHeaders()
    );

    myPosts.innerHTML = "";

    if (response.data.length === 0) {
      myPosts.innerHTML = "<p>No posts created yet.</p>";
      return;
    }

    response.data.forEach((post) => {
      myPosts.innerHTML += `
        <div class="post-card">
          <h3>${post.title}</h3>

          <p class="post-meta">
            Category: ${post.category || "General"}
          </p>

          <p>${post.content.substring(0, 120)}...</p>

          <button onclick="editPost('${post._id}', '${escapeText(post.title)}', '${escapeText(post.category || "")}', '${escapeText(post.content)}')">
            Edit
          </button>

          <button onclick="deletePost('${post._id}')">
            Delete
          </button>
        </div>
      `;
    });
  } catch (error) {
    myPosts.innerHTML = "<p>Failed to load your posts.</p>";
  }
}

async function editPost(id, oldTitle, oldCategory, oldContent) {
  const title = prompt("Update title:", oldTitle);
  if (!title) return;

  const category = prompt("Update category:", oldCategory);
  const content = prompt("Update content:", oldContent);

  if (!content) return;

  try {
    await axios.put(
      `${API}/posts/${id}`,
      {
        title,
        category,
        content
      },
      getAuthHeaders()
    );

    loadMyPosts();
  } catch (error) {
    alert(error.response?.data?.message || "Post update failed.");
  }
}

async function deletePost(id) {
  const confirmDelete = confirm("Are you sure you want to delete this post?");

  if (!confirmDelete) return;

  try {
    await axios.delete(
      `${API}/posts/${id}`,
      getAuthHeaders()
    );

    loadMyPosts();
  } catch (error) {
    alert(error.response?.data?.message || "Post delete failed.");
  }
}

async function loadSinglePost() {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");

  if (!postId) {
    singlePost.innerHTML = "<p>Post ID not found.</p>";
    return;
  }

  try {
    const response = await axios.get(`${API}/posts/${postId}`);

    const { post, comments } = response.data;

    singlePost.innerHTML = `
      <div class="post-card">
        <h1>${post.title}</h1>

        <p class="post-meta">
          Author: ${post.author?.name || "Unknown"} |
          Category: ${post.category || "General"} |
          Date: ${new Date(post.createdAt).toLocaleDateString()}
        </p>

        <p>${post.content}</p>
      </div>
    `;

    renderComments(comments);
  } catch (error) {
    singlePost.innerHTML = "<p>Failed to load post.</p>";
  }
}

function renderComments(comments) {
  commentsContainer.innerHTML = "";

  if (comments.length === 0) {
    commentsContainer.innerHTML = "<p>No comments yet.</p>";
    return;
  }

  comments.forEach((comment) => {
    commentsContainer.innerHTML += `
      <div class="post-card">
        <p>${comment.text}</p>

        <p class="post-meta">
          By: ${comment.user?.name || "Unknown"}
        </p>
      </div>
    `;
  });
}

async function addComment(event) {
  event.preventDefault();

  const token = getToken();

  if (!token) {
    alert("Please login to comment.");
    window.location.href = "login.html";
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");
  const text = document.getElementById("commentText").value.trim();

  if (!text) {
    alert("Comment cannot be empty.");
    return;
  }

  try {
    await axios.post(
      `${API}/comments/${postId}`,
      {
        text
      },
      getAuthHeaders()
    );

    document.getElementById("commentText").value = "";
    loadSinglePost();
  } catch (error) {
    alert(error.response?.data?.message || "Failed to add comment.");
  }
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

function escapeText(text) {
  return String(text)
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "\\n");
}