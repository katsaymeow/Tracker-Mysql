const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "e4F83Xeht#",
  database: "datatrackerDB"
}, 
console.log('Connected to the data.')
);



connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
