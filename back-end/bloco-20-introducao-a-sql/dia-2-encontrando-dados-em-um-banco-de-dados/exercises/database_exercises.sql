SELECT *
FROM Scientists;

SELECT name
AS Nome_do_projeto ,
hours AS tempo_de_trabalho
FROM Projects;

SELECT name
FROM Scientists
ORDER BY name ASC;

SELECT name
FROM Scientists
ORDER BY name DESC;

SELECT 
CONCAT('O projeto ', name, ' precisou de ', hours, ' para ser concluído') 
AS RESULT 
FROM Projects;

SELECT name, hours
FROM Projects 
ORDER BY hours DESC 
LIMIT 3;

SELECT 
DISTINCT project 
FROM AssignedTo;

SELECT name
FROM Projects
ORDER BY hours DESC;

SELECT *
FROM Projects
ORDER BY hours ASC
LIMIT 1
OFFSET 1;

SELECT *
FROM Projects
ORDER BY hours ASC
LIMIT 5;

SELECT 
CONCAT('Existem ', COUNT(name), " cientistas na tabelas Scientists") 
AS scientists_number 
FROM Scientists;
