// Nomor 1

SELECT MAX(students) AS students FROM students 
WHERE firstName = "Michael"

// Nomor 2

SELECT name FROM items
INNER JOIN sellers ON items.sellerId = items.id
WHERE sellers.rating > 4

// Nomor 3

SELECT name FROM employees
WHERE managerId !== name("John").managerId

// Nomor 4

SELECT MAX(students) AS students FROM students
WHERE score > AVG(score)

// Nomor 5

SELECT user_id, AVG(duration) FROM sessions
WHERE session > 1

SELECT 
* 
FROM 
vehicles 
INNER JOIN users ON vehicles.car_owner = users.user_id

