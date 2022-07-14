USE Scientists

SELECT *
FROM Scientists
WHERE name LIKE '%e%';

SELECT name
FROM Projects
WHERE code LIKE 'a%'
ORDER BY name;

SELECT `code`, name
FROM  Projects
WHERE code LIKE '%3%'
ORDER BY name;

SELECT scientist
FROM AssignedTo
WHERE project IN ('AeH3', 'Ast3', 'Che1');

SELECT *
FROM Projects
WHERE hours > 500;

SELECT *
FROM Projects
WHERE hours > 250 AND hours < 800;

SELECT name, `code`
FROM Projects
WHERE name NOT LIKE 'a%';

SELECT name
FROM Projects
WHERE code LIKE '%H%';