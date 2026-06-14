const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const darkModeBtn = document.getElementById("darkModeBtn");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || phone === "" || message === "") {
    formMessage.innerText = "All fields are required.";
    formMessage.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    formMessage.innerText = "Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  if (phone.length !== 10 || isNaN(phone)) {
    formMessage.innerText = "Phone number must be 10 digits.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.innerText = "Form submitted successfully!";
  formMessage.style.color = "green";

  contactForm.reset();
});

darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.innerText = "Light Mode";
  } else {
    darkModeBtn.innerText = "Dark Mode";
  }
});