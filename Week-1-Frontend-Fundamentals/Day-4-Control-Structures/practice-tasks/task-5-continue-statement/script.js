// Task 5: Print numbers 1 to 10 but skip 5 using continue

let output = "";

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }

  output += i + " ";
}

document.getElementById("result").textContent = output;
console.log("Numbers from 1 to 10 skipping 5:", output);