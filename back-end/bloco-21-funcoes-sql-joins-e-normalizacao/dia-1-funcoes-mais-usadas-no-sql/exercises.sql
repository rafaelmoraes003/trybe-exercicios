/* WRITE YOUR QUERY HERE */

SELECT 
  MAX(salary) AS max_salary,
  MIN(salary) AS min_salary,
  SUM(salary) AS total_salaries
  AVG(salary) AS average_salary
FROM employees;

-------------------------------------------------------------------------------------------------------------

SELECT job_id, SUM(salary)
FROM employees
GROUP BY job_id
HAVING job_id = 'it_prog';

-------------------------------------------------------------------------------------------------------------

SELECT job_id, AVG(salary)
FROM employees
GROUP BY job_id
HAVING job_id <> 'it_prog'
ORDER BY AVG(salary) DESC;

-------------------------------------------------------------------------------------------------------------

SELECT department_id, COUNT(employee_id), avg(salary)
FROM employees
GROUP BY department_id
HAVING COUNT(employee_id) > 10;

-------------------------------------------------------------------------------------------------------------

UPDATE employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

-------------------------------------------------------------------------------------------------------------

SELECT * FROM employees
WHERE CHAR_LENGTH(first_name) >= 8;

-------------------------------------------------------------------------------------------------------------

SELECT employee_id, first_name, YEAR(hire_date) FROM employees;

-------------------------------------------------------------------------------------------------------------

SELECT employee_id,first_name, DAY(hire_date) FROM employees;

-------------------------------------------------------------------------------------------------------------

SELECT employee_id, first_name, MONTH(hire_date) FROM employees;

-------------------------------------------------------------------------------------------------------------

SELECT UCASE(CONCAT(first_name, ' ', last_name)) FROM employees;

-------------------------------------------------------------------------------------------------------------

SELECT last_name, hire_date
FROM employees
WHERE MID(hire_date, 1, 7) = '1987-06';

-------------------------------------------------------------------------------------------------------------

SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) FROM employees;
