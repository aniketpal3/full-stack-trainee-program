const API_URL = "http://localhost:5000";

const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const profileBtn = document.getElementById("profileBtn");
const logoutBtn = document.getElementById("logoutBtn");
const result = document.getElementById("result");

signupForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  try {
    const response = await axios.post(`${API_URL}/signup`, {
      name,
      email,
      password
    });

    result.innerText = JSON.stringify(response.data, null, 2);
    signupForm.reset();
  } catch (error) {
    result.innerText = error.response?.data?.message || "Signup failed";
  }
});

loginForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password
    });

    localStorage.setItem("token", response.data.token);

    result.innerText = "Login successful. Token saved.";
    loginForm.reset();
  } catch (error) {
    result.innerText = error.response?.data?.message || "Login failed";
  }
});

profileBtn.addEventListener("click", async function () {
  const token = localStorage.getItem("token");

  if (!token) {
    result.innerText = "Please login first.";
    return;
  }

  try {
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    result.innerText = JSON.stringify(response.data, null, 2);
  } catch (error) {
    result.innerText = error.response?.data?.message || "Profile fetch failed";
  }
});

logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("token");
  result.innerText = "Logged out successfully.";
});