SELECT m.title, bo.domestic_sales, bo.international_sales
FROM movies AS m
INNER JOIN box_office AS bo
ON m.id = bo.movie_id;

-----------------------------------------------------------------------------------------------

SELECT m.title, (bo.domestic_sales + bo.international_sales) AS sales
FROM movies AS m
INNER JOIN box_office AS bo
ON m.id = bo.movie_id
WHERE bo.international_sales > bo.domestic_sales;

-----------------------------------------------------------------------------------------------

SELECT m.title AS title, bo.rating AS rating
FROM movies AS m
INNER JOIN box_office AS bo
ON m.id = bo.movie_id
ORDER BY bo.rating DESC;

-----------------------------------------------------------------------------------------------

SELECT 
    t.id,
    t.name,
    t.location,
    m.title,
    m.theater_id
FROM theater AS t
LEFT JOIN movies AS m
ON m.theater_id = t.id
ORDER BY t.name ASC;

-----------------------------------------------------------------------------------------------

SELECT 
    t.name,
    t.location,
    t.id,
    m.theater_id,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM theater AS t
RIGHT JOIN movies AS m
ON m.theater_id = t.id
ORDER BY t.name;

-----------------------------------------------------------------------------------------------

SELECT m.*, bo.rating
FROM movies AS m
INNER JOIN box_office AS bo
ON m.id = bo.movie_id
WHERE m.theater_id IS NOT NULL
AND bo.rating > 8;
