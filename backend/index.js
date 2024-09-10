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
// seeFirstElement("users");
// seeLastElement("users");

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
function seeFirstElement(tableName) {
    const element = `SELECT * FROM ${tableName} ORDER BY id ASC LIMIT 1`;
    connection.query(element, (err,list) => {
        if (err){
            throw err
        } else{
            console.log(list)
        }
    })
}
function seeLastElement(tableName) {
  const element = `SELECT * FROM ${tableName} ORDER BY id DESC LIMIT 1`;
  connection.query(element, (err, list) => {
    if (err) {
      throw err;
    } else {
      console.log(list);
    }
  });
}

//change elements 
connection.end();
