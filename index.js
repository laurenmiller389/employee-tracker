const inquirer = require("inquirer")
const mysql = require("mysql2")



//make inquirer prompt screen

function init() {
    inquirer.createPromptModule(
        [
            {
                "message": "what would you like to do?",
                "name": "choice",
                "type": "list",
                "choices": ["view movies", "add movies"]
            }
        ]
    ).then(answer => {
        if(answer.choice === "view movies") {
            //return all the movies in the dv
            viewAllMovies().then(([rows]) => console.log(rows)).then(() => init());
        }
    })
}

init();

function viewAllMovies() {
    const sql = `SELECT id, movies_name AS title FROM movies`;
    return db.promise().query(sql);
    };
