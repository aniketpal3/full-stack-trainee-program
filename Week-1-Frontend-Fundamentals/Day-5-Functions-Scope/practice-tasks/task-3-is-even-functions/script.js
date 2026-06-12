// Function Declaration
function isEvenDeclaration(num) {
  return num % 2 === 0;
}

// Function Expression
const isEvenExpression = function (num) {
  return num % 2 === 0;
};

// Arrow Function
const isEvenArrow = (num) => num % 2 === 0;

let number = 8;

let output = `
  Number: ${number}<br>
  Function Declaration: ${isEvenDeclaration(number)}<br>
  Function Expression: ${isEvenExpression(number)}<br>
  Arrow Function: ${isEvenArrow(number)}
`;

document.getElementById("output").innerHTML = output;

console.log(isEvenDeclaration(number));
console.log(isEvenExpression(number));
console.log(isEvenArrow(number));