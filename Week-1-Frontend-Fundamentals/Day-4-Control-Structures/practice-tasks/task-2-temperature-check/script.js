// Task 2: Temperature Check

let temperature = 28;

let resultElement = document.getElementById("result");

if (temperature > 30) {
  resultElement.textContent = "Temperature is " + temperature + "°C. Weather is Hot.";
  console.log("Hot");
} else if (temperature >= 15 && temperature <= 30) {
  resultElement.textContent = "Temperature is " + temperature + "°C. Weather is Warm.";
  console.log("Warm");
} else {
  resultElement.textContent = "Temperature is " + temperature + "°C. Weather is Cold.";
  console.log("Cold");
}