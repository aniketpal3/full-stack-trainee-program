function square(n) {
  return n * n;
}

let number = 6;

let result = square(number);

document.getElementById("result").innerHTML =
  `Square of ${number} = ${result}`;

console.log(result);