const mysql = require("mysql");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'P@ssw0rd#2024',
  database: 'mysqlNodejsDB',
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL");
    }
);