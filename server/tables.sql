-- CREATE TABLE User
-- (
--     u_userID INTEGER PRIMARY KEY,
--     u_userName CHAR(25) NOT NULL,
--     u_password CHAR(25) NOT NULL
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
-- INSERT INTO Messages(m_userID, m_message, m_date, m_latitude, m_longitude, m_icon) VALUES (2, "こんにちは" , "03-03-2019", 35.6895, 139.6917, "hand peace" );
-- INSERT INTO Messages(m_userID, m_message, m_date, m_latitude, m_longitude, m_icon) VALUES (2, "Hello lads!" , "03-03-2019", 51.5074, 0.1278, "bus" );
-- INSERT INTO Messages(m_userID, m_message, m_date, m_latitude, m_longitude, m_icon) VALUES (2, "Fierro compas!" , "03-03-2019", 19.4326, -99.1332, "thumbs up" );
-- INSERT INTO Messages(m_userID, m_message, m_date, m_latitude, m_longitude, m_icon) VALUES (2, "Crikey means ‘gee whiz, wow!" , "03-03-2019", -37.8136, 144.9631, "heart" );
-- INSERT INTO Messages(m_userID, m_message, m_date, m_latitude, m_longitude, m_icon) VALUES (2, "ITS FREEZING HERE!" , "03-03-2019", -82.8628, 135.0000, "thumbs down" );
