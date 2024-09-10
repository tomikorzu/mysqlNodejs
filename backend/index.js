const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@ssw0rd#2024",
  database: "mysqlNodejsDB",
});

let { database: databaseName } = connection.config;

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Connected to ${databaseName} database`);
  }
});

// seeTableElements("users", "username");

// setTableValues(["username", "password", "email"], "users", [
//   `'ricardo', 'ricardo123', 'ricardo@hola.com'`,
// ]);

function seeTableElements(tableName, selection) {
  const element = `SELECT ${selection} FROM ${tableName}`;
  connection.query(element, (err, list) => {
    if (err) {
      throw err;
    } else {
      console.log(list);
    }
  });
}

function setTableValues(columns, table, columnsValues) {
  const element = `INSERT INTO ${table} (${columns}) VALUES (${columnsValues})`;
  connection.query(element, (err, rows) => {
    if (err) {
      throw errlist;
    } else {
      console.log("column values sended correctly");
    }
  });
}
connection.end();
