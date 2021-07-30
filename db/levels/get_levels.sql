SELECT * 
FROM levels l
LEFT JOIN (
            SELECT u.userId, levelsId, levelStatus 
            FROM users u
            INNER JOIN userlevel ul 
            ON u.userId = ul.userId
            WHERE username = $1
          ) ul 
ON l.levelsId = ul.levelsId
ORDER BY l.levelsId