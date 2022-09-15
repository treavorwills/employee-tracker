const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const editEntry = require('./helpers/edit_entry');
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
                'Update an employee\'s role'
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
            message: 'Department ID',
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
            message: 'New Employee\'s Role ID',
            when: (answers) => answers.task === 'Add an employee'
        },
        {
            type: 'input',
            name: 'newEmployeeManager',
            message: 'New Employee\'s Manager ID',
            when: (answers) => answers.task === 'Add an employee'
        },
        {
            type: 'input',
            name: 'updateEmployeeId',
            message: 'Which Employee\'s role would you like to change (ID)?',
            when: (answers) => answers.task === 'Update an employee\'s role',
        },
        {
            type: 'input',
            name: 'updateEmployeeRole',
            message: 'What is the ID of their new role?',
            when: (answers) => answers.task === 'Update an employee\'s role',
        },
    ];

    inquirer.prompt(question).then(answers => {
        switch (answers.task) {
            case 'View all departments':
                db.query('SELECT * FROM department', (err, results) => {
                    console.table(results);
                  });
                break;
            case 'View all roles':
                db.query('SELECT role.id, role.title, role.salary, department.name AS department FROM role LEFT JOIN department on role.department_id=department.id', (err, results) => {
                    console.table(results);
                  });
                break;
            case 'View all employees':
                db.query('SELECT employee.id, CONCAT(employee.first_name, \' \', employee.last_name) AS name, role.title AS role, role.salary, department.name AS department, CONCAT(manager.first_name, \' \', manager.last_name) AS manager FROM employee LEFT JOIN employee as manager ON employee.manager_id=manager.id LEFT JOIN role ON employee.role_id=role.id LEFT JOIN department on role.department_id=department.id', (err, results) => {
                    console.table(results);
                  });
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
                editEntry('employee', db, answers);
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

