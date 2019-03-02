CREATE TABLE User
(
    u_userID INTEGER PRIMARY KEY,
    u_userName CHAR(25) NOT NULL
);

CREATE TABLE Messages
(
    m_messageID INTEGER PRIMARY KEY,
    m_userID INT(4) NOT NULL,
    m_message VARCHAR(199) NOT NULL,
    m_date DATE NOT NULL, 
    m_latitude REAL(15) NOT NULL,
    m_longitude REAL(15) NOT NULL
);

CREATE TABLE Reactions
(
    r_messageID INT(4) NOT NULL,
    r_surprised INT NOT NULL,
    r_laugh INT NOT NULL,
    r_cry INT NOT NULL,
    r_angry INT NOT NULL
);
