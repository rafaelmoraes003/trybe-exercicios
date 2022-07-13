SELECT piece, price 
FROM Provides 
WHERE provider = 'RBT';

SELECT * 
FROM Provides 
ORDER BY price DESC 
LIMIT 5;

SELECT provider, price 
FROM Provides 
ORDER BY price DESC 
LIMIT 4 
OFFSET 2;

SELECT * 
FROM Provides 
WHERE provider="HAL" 
ORDER BY price DESC;

SELECT 
COUNT(provider) 
FROM Provides 
WHERE piece = 1;