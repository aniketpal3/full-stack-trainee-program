const statusText = document.getElementById("status");

function getUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data received");
    }, 2000);
  });
}

async function fetchUser() {
  statusText.innerText = "Fetching user data...";
  console.log("Fetching user data...");

  const userData = await getUserData();

  statusText.innerText = userData;
  console.log(userData);
}

fetchUser();