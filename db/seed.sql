USE datatrackerDB;

INSERT INTO department (id, name_)
VALUES (0, "Sales");
INSERT INTO department (id, name_)
VALUES (0, "Engineering");
INSERT INTO department (id, name_)
VALUES (0, "Service");
INSERT INTO department (id, name_)
VALUES (0, "Finance");

INSERT INTO roles (id, title, salary, department_id)
VALUES (0, "Online Sales", 75000, 1);
INSERT INTO roles (id, title, salary, department_id)
VALUES (0, "Database Engineer", 92500, 2);
INSERT INTO roles (id, title, salary, department_id)
VALUES (0, "Application Testing", 98000, 3);
INSERT INTO roles (id, title, salary, department_id)
VALUES (0, "CPA", 45000, 4);

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (0, "Nadia", "VonRoush", 2);
INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (0, "Jake", "Statesman", 1);
INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (0, "Justine", "Knight", 3);
INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (0, "Charlie", "Hempsted", 4);
INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (0, "Forest", "Lakes", 1);
INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (0, "Vera", "Pennyworth", 2);