INSERT INTO departments (name)
VALUES ('Marketing'),
       ('Accounting');
     
INSERT INTO roles (title, salary, department_id)
VALUES ('assistant', 10000, 1),
        ('Jr Accountant', 120101, 2);

INSERT INTO employees (employee, role_id)
VALUES ('steve', 1),
        ('jim', 2);