// Functions that access database
// declares inquirer and fs for loadPrompts.
const inquirer = require('inquirer');
const fs = require('fs');
const newInquire = require("./lib/newemployee");

function loadPrompts(){
    return inquirer.prompt([
        // inquirer prompt for command line function
        {
            type: "list",
            name: "choice",
            message: "What would you like to start with",
            choices: [
                "View All Employees",
                "View All Departments",
                "View All Roles",
                "End"
            ]
        }
    ])
    .then (function ({ choice }) {
        switch (choice) {
            case "View All Employees":
                allEmployee();
                break;
            case "View All Departments":
                allDepartments();
                break;
            case "View All Roles":
                allRoles();
                break;
            case "End":
                connection.end();
                break;
        }
    })
    .catch((error) => {
        if (error.isTryError) {
            console.log("not correct")
        } else {
            console.log("correct")
        }
    })
};


module.exports = loadPrompts();