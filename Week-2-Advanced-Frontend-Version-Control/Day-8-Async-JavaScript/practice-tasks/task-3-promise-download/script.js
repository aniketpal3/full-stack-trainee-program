const statusText = document.getElementById("status");

function downloadFile() {
  return new Promise((resolve) => {
    statusText.innerText = "Downloading file...";

    setTimeout(() => {
      resolve("Download Complete");
    }, 3000);
  });
}

downloadFile()
  .then((message) => {
    statusText.innerText = message;
    console.log(message);
  });