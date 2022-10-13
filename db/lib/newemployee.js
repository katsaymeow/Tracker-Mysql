const connection = require('../connection');
const table = require("console.table");

function allEmployee() {
    console.log("You are viewing all employees\n");
// query to mysql for employee table
    connection.query(`SELECT * FROM employee`, function (err, choice) {
        if (err) throw err;
        console.table(choice);
        console.log("employee view sucessed\n")
    }) 
};

function allDepartments() {
    console.log("You are viewing all departments\n")
// query to mysql for department table
    connection.query(`SELECT * FROM department`, function (err, choice) {
        if (err) throw err;
        console.table(choice);
        console.log("department view sucessed\n")
    })
};

function allRoles() {
    console.log("You are viewing all roles");
// query to mysql for roles table
    connection.query(`SELECT * FROM roles`, function (err, choice) {
        if (err) throw err;
        console.table(choice);
        console.log("roles view sucessed\n")
    })

};
// exports function modules
module.exports = {
    allEmployee, allDepartments, allRoles
}
