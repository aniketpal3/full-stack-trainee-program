const projectList = document.getElementById("project-list");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const darkModeBtn = document.getElementById("darkModeBtn");

const projects = [
  {
    title: "Calculator App",
    description: "A basic calculator built using HTML, CSS, and JavaScript."
  },
  {
    title: "To-Do List",
    description: "A task management app with add, complete, and delete features."
  },
  {
    title: "Number Guessing Game",
    description: "A JavaScript game using control structures and random numbers."
  },
  {
    title: "Student Records App",
    description: "A records app using arrays, objects, filter, and reduce."
  },
  {
    title: "Fake API Data Fetcher",
    description: "A project using fetch, Promises, and Async/Await."
  },
  {
    title: "Responsive Portfolio",
    description: "A personal portfolio website with form validation and dark mode."
  }
];

function displayProjects() {
  projectList.innerHTML = "";

  projects.forEach(function (project) {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;

    projectList.appendChild(projectCard);
  });
}

displayProjects();

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

  if (!email.includes("@") || !email.includes(".")) {
    formMessage.innerText = "Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  if (phone.length !== 10 || isNaN(phone)) {
    formMessage.innerText = "Phone number must be 10 digits.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.innerText = "Message sent successfully!";
  formMessage.style.color = "green";

  contactForm.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();

    const section = document.querySelector(this.getAttribute("href"));

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.innerText = "☀️ Light Mode";
  } else {
    darkModeBtn.innerText = "🌙 Dark Mode";
  }
});