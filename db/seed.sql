Drop TABLE IF EXISTS leaderboard;
Drop TABLE IF EXISTS inventory;
Drop TABLE IF EXISTS items;
Drop TABLE IF EXISTS users;



CREATE TABLE users (
    userId SERIAL PRIMARY KEY,
    username VARCHAR(100),
    pass VARCHAR(2000)
);

CREATE TABLE items (
    itemId SERIAL PRIMARY KEY,
    item VARCHAR(100),
    img VARCHAR(100)
);

CREATE TABLE inventory (
    inventoryId SERIAL PRIMARY KEY,
    userId INT REFERENCES users(userId),
    itemId INT REFERENCES items(itemId)
);

CREATE TABLE leaderboard (
    leaderboardId SERIAL PRIMARY KEY,
    userId INT REFERENCES users(userId)
);