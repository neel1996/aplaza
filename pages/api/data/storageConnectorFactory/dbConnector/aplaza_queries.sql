-- Compatible with postgresql

CREATE DATABASE aplaza_db;

CREATE TABLE projects(
    project_serial_no SERIAL NOT NULL,
    project_id VARCHAR(10) PRIMARY KEY,
    project_name VARCHAR(50) NOT NULL,
    project_description VARCHAR(255) NOT NULL,
    project_due_date DATE NOT NULL,
    project_repo_url VARCHAR(255) NOT NULL,
    is_project_complete BOOLEAN DEFAULT(false) NOT NULL
);

SELECT * FROM projects;