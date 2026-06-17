const API_URL = "http://localhost:5000/users";

const userForm = document.getElementById("userForm");
const message = document.getElementById("message");

userForm.addEventListener("submit", async function (event) {
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
    const response = await axios.post(API_URL, {
      name,
      email,
      age: Number(age)
    });

    message.innerText = "User created successfully.";
    message.style.color = "green";

    console.log(response.data);
    userForm.reset();
  } catch (error) {
    message.innerText = "Error creating user.";
    message.style.color = "red";
    console.error(error);
  }
});