const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
 
  let workers = [];

  // TODO: Get user input to create and return an array of employee objects
  
 while(true) {
  let firstNames, lastNames, salaries;

  while(true) {
    firstNames = prompt("Please enter first name")
    break;
  }
  
  while(true) {
    lastNames = prompt("Please enter last name")
    break;
  }


  while(true){
    salaries = prompt("Please enter salary.")
    if (isNaN(salaries)) {
      alert ('Not a Number!')
    }else {
      break;
    }

   }
  

  const workerss = {
  firstName: firstNames,
  lastName: lastNames,
  salary: salaries
  }
  workers.push(workerss)


if (confirm("Do you want to add more employees")){}
  else {
  break;
 }

 }
 return workers
}
// console.log (workers)

// Display the average salary
const displayAverageSalary = function(employeesArray) {
const initialValue = 0;
const sumWithInitial = employeesArray.reduce(
  (accumulator, currentValue) => accumulator + parseInt(currentValue.salary),
  initialValue,
)
const Average= sumWithInitial/employeesArray.length
console.log(sumWithInitial)
console.log(`The employee average salary between ${employeesArray.length} employees is ${Average}.`)
}



// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);