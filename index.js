const inquirer = require("inquirer")
const mysql = require("mysql2")
const db = require('./config/connection')


//make inquirer prompt screen

function init() {
    inquirer.prompt(
        [
            {
                "message": "what would you like to do?",
                "name": "choice",
                "type": "list",
                "choices": 
                [
                "View All Employees", 
                "Add Employee",
                "Update Employee Role",
                "View All Roles",
                "Add Role",
                "View All Departments",
                "Add Department"
                ]
            }
        ]
    ).then(answer => {
        if(answer.choice === "View All Employees") {
            //return all the employees in the db
            viewAllEmployees().then(([rows]) => console.log(rows)).then(() => init());
        }
    })
}

init();

function viewAllEmployees() {
    const sql = `SELECT employee.first_name AS manager FROM employee`;
    return db.promise().query(sql);
    };
