const loginForm =
  document.getElementById("loginForm");

const profileBtn =
  document.getElementById("profileBtn");

const result =
  document.getElementById("result");

loginForm.addEventListener(
  "submit",
  async function(e) {

    e.preventDefault();

    const email =
      document.getElementById("email").value;

    const password =
      document.getElementById("password").value;

    try {

      const response =
        await axios.post(
          "http://localhost:5000/login",
          {
            email,
            password
          }
        );

      localStorage.setItem(
        "token",
        response.data.token
      );

      result.innerText =
        "Login Successful";

    } catch (error) {

      result.innerText =
        "Login Failed";

    }
  }
);

profileBtn.addEventListener(
  "click",
  async function() {

    const token =
      localStorage.getItem("token");

    try {

      const response =
        await axios.get(
          "http://localhost:5000/profile",
          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        );

      result.innerText =
        JSON.stringify(
          response.data,
          null,
          2
        );

    } catch (error) {

      result.innerText =
        "Access Denied";

    }
  }
);