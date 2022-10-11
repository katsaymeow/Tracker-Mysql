DROP DATABASE IF EXISTS datatrackerDB;
CREATE DATABASE datatrackerDB;

USE datatrackerDB;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name_ VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(7,2),
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id),
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    FOREIGN KEY (role_id)
    REFERENCES roles(id),
    PRIMARY KEY (id)
);

