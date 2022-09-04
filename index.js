const inquirer = require('inquirer');

function getTask() {
    question = [
        {
            type: 'list',
            name: 'task',
            message: 'What\'chu wanna do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee ',
                'Update an employee\'s role',
                'Other'
            ]
        },
    ];

    inquirer.prompt(question).then(answers => {
        switch (answers.task) {
            case 'View all departments':
                console.log('view dept');
                break;
            case 'View all roles':
                console.log('view roles');
                break;
            case 'View all employees':
                console.log('view employee');
                break;
            case 'Add a department':
                console.log('add dept');
                break;
            case 'Add a role':
                console.log('add role');
                break;
            case 'Add an employee':
                console.log('add employee');
                break;
            case 'Update an employee\'s role':
                console.log('update role');
                break;
            case 'Other':
                console.log('Other');
                break;
        }
        getTask();
    });
}

getTask();