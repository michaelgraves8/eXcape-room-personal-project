DROP TABLE IF EXISTS fakeInventory;
DROP TABLE IF EXISTS levels;
DROP TABLE IF EXISTS leaderboard;
DROP TABLE IF EXISTS inventory;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS users;



CREATE TABLE users (
    userId SERIAL PRIMARY KEY,
    username VARCHAR(100),
    pass VARCHAR(2000)
);

CREATE TABLE items (
    itemId SERIAL PRIMARY KEY,
    item VARCHAR(100),
    describe VARCHAR(100)
);

CREATE TABLE inventory (
    inventoryId SERIAL PRIMARY KEY,
    itemId INT REFERENCES items(itemId)
);

CREATE TABLE leaderboard (
    leaderboardId SERIAL PRIMARY KEY,
    userId INT REFERENCES users(userId)
);

CREATE TABLE levels (
    levelsId SERIAL PRIMARY KEY,
    levelName VARCHAR(100),
    link VARCHAR(100),
    levelStatus VARCHAR(100)
);

CREATE TABLE fakeInventory (
    fakeInventoryId SERIAL PRIMARY KEY,
    item VARCHAR(100),
    describe VARCHAR(100)
);

insert into levels (levelName, link, levelStatus)
values 
('Level 1', '/Level1Main', 'Incomplete'),
('Level 2', '/Level2Main', 'Incomplete');

insert into items (item, describe)
values 
('KEY', 'Use to unlock main door'),
('CAN', 'A can from the shelf');