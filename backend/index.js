const mysql = require("mysql");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'P@ssw0rd#2024',
  database: 'mysqlNodejsDB',
});

let {database:databaseName} = connection.config


connection.connect((err) => {
    if (err){
        throw err
    } else{
        console.log(`Connected to ${databaseName} database`)
    }
}
);

const users = `SELECT * from users`
const username = `SELECT username from users`
connection.query(users, (err, list) => {
    if (err){ 
        throw err
    } else{
        console.log(list)
    }
})
connection.query(username, (err, list) => {
    if (err){ 
        throw err
    } else{
        console.log(list.length)
    }
})
connection.end()