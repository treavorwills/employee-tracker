const mysql = require('mysql2');


const addEntry = (tableName, answers, db) => {
  switch (tableName) {
    case 'department':
      // db.query(`INSERT INTO department (name) VALUES (${answers.newDepartment})`)
      console.log(answers.newDepartment);
      break;
    case 'role':
      break;
    case 'employee':
      break;
  };
};

module.exports = addEntry;