DO $$
declare user_id integer;
BEGIN
        select userId from users where username = $2 into user_id;

        if (select count(*) from userlevel WHERE levelsId = $1 AND userId = user_id ) > 0
        then
            UPDATE userlevel
            SET levelStatus = 'Complete'
            WHERE levelsId = $1 AND userId = user_id;
        else
            insert into userlevel (levelsId, userId, levelStatus, updatedDate)
            values($1, user_id, 'Complete', now());
        end if;
END $$