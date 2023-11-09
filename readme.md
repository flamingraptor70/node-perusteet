# Assigment for Database material

## Diagram of the database structure


## Examples of UPDATE / DELETE and other manipulations
- #### Update a user's username or password
`UPDATE Users SET username = 'NewUsername', password = 'NewPassword' WHERE user_id = 260;`

- #### Delete a media item:
`DELETE FROM MediaItems WHERE filename = 'ffd8.jpg';`

- #### Query to find all media items uplodaded by user with :id
`SELECT * FROM MediaItems WHERE user_id = 260;`

- #### Add a new follower for a user:
`INSERT INTO Follow (follower_id, following_id, created_at) VALUES (260, 305, CURRENT_TIMESTAMP);`

- #### Remove a follower from a user:
`DELETE FROM Follow WHERE follower_id = 260 AND following_id = 305;`

- #### Query to find all users a specific user is following:
`SELECT * FROM Users WHERE user_id IN (SELECT following_id FROM Follow WHERE follower_id = 260);`