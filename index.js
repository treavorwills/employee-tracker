const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const viewTable = require('./helpers/view_table');
const addEntry = require('./helpers/add_entry');

// Connect to database
const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        // MySQL Username
        user: 'root',
        // TODO: Add MySQL Password
        password: 'password',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);


function getTask() {
    question = [
        {
            type: 'list',
            name: 'task',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee\'s role',
                'Other'
            ]
        },
        {
            type: 'input',
            name: 'newDepartment',
            message: 'New Department Name',
            when: (answers) => answers.task === 'Add a department'
        },
        {
            type: 'input',
            name: 'newRole',
            message: 'New Role Name',
            when: (answers) => answers.task === 'Add a role'
        },
        {
            type: 'input',
            name: 'newSalary',
            message: 'Salary',
            when: (answers) => answers.task === 'Add a role'
        },
        {
            type: 'input',
            name: 'newRolesDepartment',
            message: 'Department',
            when: (answers) => answers.task === 'Add a role'
        },
        {
            type: 'input',
            name: 'newFirstName',
            message: 'New Employee First Name',
            when: (answers) => answers.task === 'Add an employee'
        },
        {
            type: 'input',
            name: 'newLastName',
            message: 'New Employee Last Name',
            when: (answers) => answers.task === 'Add an employee'
        },
        {
            type: 'input',
            name: 'newEmployeeRole',
            message: 'New Employee\'s Role',
            when: (answers) => answers.task === 'Add an employee'
        },
        {
            type: 'input',
            name: 'newEmployeeManager',
            message: 'New Employee\'s Manager',
            when: (answers) => answers.task === 'Add an employee'
        },
    ];

    inquirer.prompt(question).then(answers => {
        switch (answers.task) {
            case 'View all departments':
                viewTable('department', db);
                break;
            case 'View all roles':
                viewTable('role', db);
                break;
            case 'View all employees':
                viewTable('employee', db);
                break;
            case 'Add a department':
                console.log(answers.newDepartment);
                addEntry('department', answers, db);
                break;
            case 'Add a role':
                console.log(answers.newRole);
                addEntry('role', answers, db);
                break;
            case 'Add an employee':
                console.log(answers.newFirstName + answers.newLastName);
                addEntry('employee', answers, db);
                break;
            case 'Update an employee\'s role':
                console.log('update role');
                break;
            case 'Other':
                console.log('Other');
                break;
        }
        setTimeout(() => {
            getTask();
        }, 100);
    });
}

getTask();