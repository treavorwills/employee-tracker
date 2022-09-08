const mysql = require('mysql2');


const addEntry = (tableName, answers, db) => {
  switch (tableName) {
    case 'department':
      db.query(`INSERT INTO department (name) VALUES (?)`, answers.newDepartment);
      break;
    case 'role':
      db.query(`INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`, [answers.newRole, answers.newSalary, answers.newRolesDepartment]);
      break;
    case 'employee':
      db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`, [answers.newFirstName, answers.newLastName, answers.newEmployeeRole, answers.newEmployeeManager]);
      break;
  };
};

module.exports = addEntry;