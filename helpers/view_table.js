const mysql = require('mysql2');


const viewTable = (tableName, db) => {
// print the table
db.query(`SELECT * FROM ${tableName}`, function (err, results) {
  console.table(results);
});
};

module.exports = viewTable;