DROP DATABASE IF EXISTS employer_db;
CREATE DATABASE employer_db;

\c employer_db;

CREATE TABLE departments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary INTEGER,
  department_id INTEGER,
  FOREIGN KEY (department_id)
  REFERENCES departments(id)
  ON DELETE SET NULL
);

CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  employee VARCHAR(30) NOT NULL,
  role_id INTEGER,
  FOREIGN KEY (role_id)
  REFERENCES roles(id)
  ON DELETE SET NULL
);
