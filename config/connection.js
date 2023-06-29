const inquirer = require("inquirer")
const mysql = require("mysql2")

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'laurensql389',
        database: 'employees_db'
    },
    console.log("connected to the movie_db database")
);

db.connect(function(err) {
    if (err) throw err;
});

module.exports = db;