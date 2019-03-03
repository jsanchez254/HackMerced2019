-- CREATE TABLE User
-- (
--     u_userID INTEGER PRIMARY KEY,
--     u_userName CHAR(25) NOT NULL
-- );

-- CREATE TABLE Messages
-- (
--     m_messageID INTEGER PRIMARY KEY,
--     m_userID INT(4) NOT NULL,
--     m_message VARCHAR(199) NOT NULL,
--     m_date DATE NOT NULL, 
--     m_latitude REAL(15) NOT NULL,
--     m_longitude REAL(15) NOT NULL,
--     m_Icon VARCHAR(199) NOT NULL
-- );

-- CREATE TABLE Reactions
-- (
--     r_messageID INT(4) NOT NULL,
--     r_surprised INT NOT NULL,
--     r_laugh INT NOT NULL,
--     r_cry INT NOT NULL,
--     r_angry INT NOT NULL
-- );

-- CREATE TABLE Replies
-- (
--     r_replyID INTEGER PRIMARY KEY,
--     r_messageID INT(4) NOT NULL,
--     r_reply VARCHAR(199) NOT NULL,
--     m_userID INT(4) NOT NULL
-- );


-- INSERT INTO Messages(m_userID, m_message, m_date, m_latitude, m_longitude, m_icon) VALUES (2, "hello there" , "03-02-2019", 25.2744, 133.7751, "nintendo switch" );
