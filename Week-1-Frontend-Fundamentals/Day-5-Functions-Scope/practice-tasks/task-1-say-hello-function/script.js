function sayHello() {
  return "Hello Student";
}

let output = "";

output += sayHello() + "<br>";
output += sayHello() + "<br>";
output += sayHello() + "<br>";

document.getElementById("output").innerHTML = output;

console.log(sayHello());
console.log(sayHello());
console.log(sayHello());