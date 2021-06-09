INSERT INTO users
(username, pass)
VALUES($1, $2) RETURNING *;