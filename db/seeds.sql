INSERT INTO department (id, department_name)
VALUES  (1, "Sales")
        (2, "Engineering"),
        (3, "Finance")
        (4, "Legal");
        

INSERT INTO role (department_id, title, salary)
VALUES (1, "Sales Lead", 100000),
       (1, "Salesperson", 80000),
       (2, "Lead Engineer", 150000),
       (2, "Software Engineer", 120000),
       (3, "Account Manager", 160000),
       (3, "Accountant", 125000),
       (4, "Legal Team Lead", 250000);
       (4, "Lawyer", 190000);
       
INSERT INTO employee (role_id, manager_id, first_name, last_name)
VALUES (1, null, "Chris", "Topher"),
       (2, null, "Carol", "Ine"),
       (3, null, "Eliza", "Beth"),
       (4, null, "Matt", "Hew"),
       (1, 1, "Anna", "Lise"),
       (2, 2, "Max", "Well"),
       (3, 3, "Frank", "Lin"),
       (4, 4, "Jenni", "Fer");
       