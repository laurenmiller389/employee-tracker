const inquirer = require("inquirer")
const mysql = require("mysql2")
const db = require('./config/connection');
require('console.table');


//make inquirer prompt screen

function init() {
    inquirer.prompt(
        [
            {
                message: "what would you like to do?",
                name: "choice",
                type: "list",
                choices: 
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

        // EXAMPLE ON HOW TO DISPLAY NAMES WITH IDS
        // [
        //     {
        //         message: "Select something",
        //         name: "random",
        //         type: "list",
        //         choices: [
        //             { value: "123", name: "This is a random choice"},
        //             { value: "321", name: "This is a random choice 2"},
        //         ]
        //     }
        // ]
    ).then(answer => {
        // console.log(answer);
        if(answer.choice === "View All Employees") {
            //return all the employees in the db
            viewAllEmployees().then(([rows]) => console.table(rows)).then(() => init());
        } else if (answer.choice === "View All Roles") {
            viewAllRoles().then(([rows]) => console.table(rows)).then(() => init());
        }else if (answer.choice === "View All Departments") {
            viewAllRoles().then(([rows]) => console.table(rows)).then(() => init());
        } else if(answer.choice === "Add Employee") {
             addEmployee().then(([rows]) => console.log(rows)).then(() => init());
        } else if(answer.choice === "Add Employee") {
            addEmployee().then(([rows]) => console.log(rows)).then(() => init());
       }
    })
}

function viewAllEmployees() {
    const sql = `SELECT employee.first_name AS Employee FROM employee`;
    return db.promise().query(sql);
    };

function viewAllRoles() {
    const sql = `SELECT role.title, role.salary, department.department_name AS Department FROM role LEFT JOIN department on department.id = role.department_id`;
    return db.promise().query(sql);
    };

function viewAllDepartments() {
     const sql = `SELECT department.department_name AS departments FROM department`;
     return db.promise().query(sql);
 };

function addDepartment() {
    // Inquirer prompt to get user input for the department name
    // Take their response and run a prepared statement
    // `Insert into [TABLE] VALUES (?)`
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Enter new department: "
        }
    ]).then(function(res) {
        const sql = `INSERT INTO department SET ?`;
        return db.promise().query(sql, { name: res.name })
    }) 
}

function addEmployee() {
    // SQL query on all roles, you want the ID and the title
    // Inquirer prompt for user to select a role (This should display the title, but have the value of the ID EX: { name: "Sales Lead", value: "1"})
    inquirer.prompt([
        {
            name: "first_name",
            type: "input",
            message: "Enter emoplyee's first name: "
        },
        {
            name: "last_name",
            type: "input",
            message: "Enter employee's last name: "
        },
        {
            name: "role_id",
            type: "list",
            message: "Enter employee's role: "
            //need to add a choices drop down for role
        },
        {
            name: "manager_id",
            type: "list",
            message: "Enter manager name: "
            //need to add a choices drop down for manager
        }
    ]).then(function (value) {
        //may need to define role and manager ids here
        const sql = `INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES (?, ?, ?, ?)`
        return db.promise().query(sql,[value.first_name, value.last_name, value.role_id, value.manager_id] );
    })
}

init();