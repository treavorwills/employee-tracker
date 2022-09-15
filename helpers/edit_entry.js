const mysql = require('mysql2');


const editEntry = (tableName, db, answers) => {
    db.query("UPDATE employee SET role_id = ? WHERE id = ?", [answers.updateEmployeeRole, answers.updateEmployeeId]);
};

module.exports = editEntry;