const inquirer = require('inquirer');
const fs = require('fs');
// const express = require('express');

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
        message: 'What is the name of the Department?',
        name: 'newDepartment',
        when: (answer) => answer.selection === 'Add Department'
      },
      {
        type: 'input',
        message: 'What is the name of the Role?',
        name: 'newRole',
        when: (answer) => answer.selection === 'Add Role'
      },
      {
        type: 'input',
        message: 'What is the name of the Employee?',
        name: 'newEmployee',
        when: (answer) => answer.selection === 'Add Employee'
      },

    ])
    .then((answer) => {
        const selection = answer.selection 
        if (selection === 'View All Departments'){

        }
    }
    )
  