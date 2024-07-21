const inquirer = require('inquirer');
const fs = require('fs');

inquirer 
.prompt([
    {
        type: 'list',
        message:'What would you like to do?',
        name: 'selection',
        choices: ['View All Departments', 'Add Department', 'View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role']
      },
      {
        type: 'input',
        message: 'What if the name of the Department?',
        name: 'newDepartment',
        when: (answer) => answer.selection === 'Add Department'
      }
    ])
    .then((answer) => {
        const selection = answer.selection 
        if (selection == 'View All Departments')
    }
    )
  