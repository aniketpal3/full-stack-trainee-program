const employees = [
  {
    name: "Rahul",
    salary: 30000
  },
  {
    name: "Aditi",
    salary: 40000
  },
  {
    name: "Aman",
    salary: 35000
  }
];

const updatedEmployees = employees.map(employee => {
  return {
    name: employee.name,
    salary: employee.salary + employee.salary * 0.1
  };
});

let output = "<h2>Updated Employee Salaries</h2>";

updatedEmployees.forEach(employee => {
  output += `${employee.name} - ₹${employee.salary}<br>`;
});

document.getElementById("output").innerHTML = output;

console.log(updatedEmployees);