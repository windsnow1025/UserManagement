-- @BLOCK
-- Create Table
CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(64),
    passwd VARCHAR(64)
);

-- @BLOCK
-- Drop Table
DROP TABLE Users;

-- @BLOCK
-- Add a User
INSERT INTO Users (username,passwd)
VALUES (
    'user1',
    'password1'
);

-- @BLOCK
-- Select Users
SELECT * FROM Users;
