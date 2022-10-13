const inquirer = require("inquirer");
const newEmployee = require("./db/lib/newemployee");
console.log("test");
const fs = require('fs');
const newInquire = require("./db/lib/newemployee");
// starts inquirer
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
                newEmployee.allEmployee();
                break;
            case "View All Departments":
                newEmployee.allDepartments();
                break;
            case "View All Roles":
                newEmployee.allRoles();
                break;
            case "End":
                newEmployee.connection.end();
                break;
        }
    })
    .catch((error) => {
        console.log(error)
    })
};

module.exports = loadPrompts();