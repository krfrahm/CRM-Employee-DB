const inquirer = require('inquirer');
require('dotenv').config()
const pool = require('./config')
const VIEW_ALL_DEPARTMENTS= "View All Departments";
const ADD_DEPARTMENT = "Add Department";
const VIEW_ALL_ROLES= "View All Roles";
const ADD_ROLE = "Add Role";
const VIEW_ALL_EMPLOYEES= "View All Employees";
const ADD_EMPLOYEE = "Add Employee";
const UPDATE_EMPLOYEE_ROLE = "Update Employee Role"
const QUIT_CMD = "Quit"
const mainPrompt = [
  {
    type: 'list',
    message:'What would you like to do?',
    name: 'action',
    choices: [VIEW_ALL_DEPARTMENTS, ADD_DEPARTMENT, VIEW_ALL_ROLES, ADD_ROLE, VIEW_ALL_EMPLOYEES, ADD_EMPLOYEE, UPDATE_EMPLOYEE_ROLE, QUIT_CMD]
  },
]


function viewAllDepartments() {
  pool.query("SELECT * FROM departments")
    .then(({rows}) =>{
      console.table(rows)
      main();
    })  
}

function viewAllRoles() {
  pool.query("SELECT * FROM roles")
    .then(({rows}) =>{
      console.table(rows)
    main()
  })
};

function viewAllEmployees() {
  pool.query("SELECT * FROM employees")
    .then(({rows}) =>{
      console.table(rows)
    main()
  })  
};

function addDepartment(){
  inquirer.prompt([
    {
      message:'What is the name of the department you would like to add?',
      name: 'departmentName',
    }
  ])
  .then(({departmentName}) => {
  pool.query("INSERT INTO departments (name) VALUES ($1)", [departmentName])
  .then(()=>{
    console.log("Department was added!")
    main()
  })
})
};

function addRole(){
  pool.query('SELECT id AS value, name FROM departments')
  .then(({rows}) => {
  inquirer.prompt([
    {
      message:'What is the role that you would like to add?',
      name: 'title'
    },
    {
      message: 'What is the salary of this role',
      name: 'salary'
    },
    {
      type: 'list',
      choices: rows,
      message:'What department is this role in?',
      name: 'department'
    }
  ])
  .then(({title, salary, department}) => {
  pool.query("INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)", [title, salary, department])
  .then(()=>{
    console.log("Role was added!")
    main()
  })
})
})
}

function addEmployee(){
  pool.query('SELECT id AS value, title FROM roles')
  .then(({rows}) => {
  inquirer.prompt([
    {
      message:'What is the employees name?',
      name: 'employee'
    },
    {
      type: 'list',
      choices: rows,
      message:'What role is this employee taking?',
      name: 'role'
    }

  ])
  .then(({employee, role}) => {
  pool.query("INSERT INTO employees (employee, role_id) VALUES ($1, $2)", [employee, role])
  .then(()=>{
    console.log("Role was added!")
    main()
  })
})
})
}
function exitProgram() {
  console.log("Goodbye")
  process.exit(0)
}

function main(){
  inquirer.prompt(mainPrompt)
  .then((response) =>{
    switch(response.action) {
      case VIEW_ALL_DEPARTMENTS: 
        viewAllDepartments()
        break;
      case VIEW_ALL_EMPLOYEES:
        viewAllEmployees()
        break;
      case VIEW_ALL_ROLES: 
        viewAllRoles()
        break
      case ADD_DEPARTMENT:
        addDepartment()
        break
      case ADD_ROLE: 
        addRole()
        break
      case ADD_EMPLOYEE: 
        addEmployee()
        break
      case UPDATE_EMPLOYEE_ROLE: 
        updateEmployee()
        break
      case QUIT_CMD: 
        exitProgram()
        break
    }}
  )}

  main();