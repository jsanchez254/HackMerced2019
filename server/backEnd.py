from flask import Flask, request
import sqlite3 as sql
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/getUserReplies" ,  methods = ["GET", "POST"])
def getUserReplies():
        if (request.method == "POST"):
                store = request.data
                store = json.loads(store)
                print store
                parse = store["msgID"]
                msgID = parse["realMsgID"]
                return getUsers(msgID)

def getUsers(msgID):
        connect = sql.connect("app.db")
        cursor = connect.cursor()
        cursor.execute("SELECT m_userID FROM Replies WHERE r_messageID = ?; ", (msgID,))
        store = cursor.fetchall()
        
        cursor.execute("SELECT COUNT(m_userID) FROM Replies WHERE r_messageID = ?; ", (msgID,))
        count = cursor.fetchall()

        userNames = []
        for i in range(count[0][0]):
               cursor.execute("SELECT u_userName FROM Users WHERE u_userID = ?; ", (store[i][0],))
               temp = cursor.fetchall() 
               userNames.append(temp[0][0])
        userNames = json.dumps(userNames)
        print "UserNames ", userNames
        return userNames

#GET USER NAME
@app.route("/getUserName" ,  methods = ["GET", "POST"])
def getUserName():
        if (request.method == "POST"):
                store = request.data
                parse = json.loads(store)
                userID = parse["userID"]
                user = userID["user"]

                return getUserName(user)

def getUserName(user):
        connect = sql.connect("app.db")
        cursor = connect.cursor()
        cursor.execute("SELECT u_userName FROM Users WHERE u_userID = ?; ", (user,))
        store = cursor.fetchall()
        return store[0][0]


userName1 = ""

#CREATE ACCOUNT
@app.route("/auth" ,  methods = ["GET", "POST"])
def auth():
        if (request.method == "POST"):
                store = request.data
                parse = json.loads(store)
                parse = parse["userInfo"]
                userName = parse["userName"]
                password = parse["password"]

                return checkIfExists(userName, password)
        return userName1

def checkIfExists(userName, password):
        connect = sql.connect("app.db")
        print userName
        print password
        cursor = connect.cursor()
        cursor.execute("SELECT u_userName FROM Users WHERE u_userName = ? AND u_password = ?; ", (userName, password))
        store = cursor.fetchall()
        print store
        try:
           global userName1
           userName1 = store[0][0]
        except IndexError:
           return "false"

        return "true"

#CREATE ACCOUNT
@app.route("/createAccount" ,  methods = ["GET", "POST"])
def createAccount():
        if (request.method == "POST"):
                store = request.data
                parse = json.loads(store)
                parse = parse["createAccount"]
                userName = parse["userName"]
                password = parse["password"]

                print userName
                insertAccount(userName, password)

                return "cool"

def insertAccount(userName, password):
        connect = sql.connect("app.db")
        cursor = connect.cursor()

        cursor.execute("INSERT INTO Users (u_userName, u_password) VALUES (?,?)", (userName, password))
        connect.commit()
        return "stored"


#GET REPLIES
@app.route("/getReplies" ,  methods = ["GET", "POST"])
def getReplies():
        if (request.method == "POST"):
                store = request.data
                store = json.loads(store)
                print store
                parse = store["msgID"]
                msgID = parse["realMsgID"]
                return getReplies1(msgID)
                

def getReplies1(msgID):
        connect = sql.connect("app.db")
        cursor = connect.cursor()
        cursor.execute("SELECT r_reply FROM replies WHERE r_messageID = ? ", (msgID,))
        store = cursor.fetchall()
        replies = []
        for i in range(len(store)):
                replies.append(store[i][0])
        replies = json.dumps(replies)
        return replies

#POST REPLY
@app.route("/postReply" ,  methods = ["GET", "POST"])
def postReply():
        if (request.method == "POST"):
                store = request.data
                store = json.loads(store)
                parse = store["rep"]
                print "HEEEEEEEEEEEEEEEEEEERE" ,parse
                reply = parse["replay"]
                userID = parse["userID"]
                # print userID
                msgID = parse["msgID"]
                print userID
                userID = getUserID(userID)
                print "ID HEREEEgrgergrg ", userID
                insertReply(msgID, reply, userID)
                return "cool"

def getUserID(user):
        connect = sql.connect("app.db")
        cursor = connect.cursor()  
        global userName
        cursor.execute("SELECT u_userID FROM Users WHERE u_userName = ? ", (user,))
        store = cursor.fetchall()
        return store[0][0]

def insertReply(msgID, reply, userID):
        connect  = sql.connect("app.db")
        cursor = connect.cursor()
        cursor.execute("INSERT INTO Replies (r_messageID, r_reply, m_userID) VALUES (?,?,?) ", (msgID, reply, userID))
        connect.commit()
        return "jaja"

#GET ICON
@app.route("/getIcon")
def getIcon():
        connect = sql.connect("app.db")
        cursor = connect.cursor()
        cursor.execute("SELECT m_Icon FROM Messages")
        messages = cursor.fetchall()
        msgList = []
        for i in range(len(messages)):
                msgList.append(messages[i][0])
        messages = json.dumps(msgList)
        return messages

#GET UserID
@app.route("/UserID")
def UserID():
        connect = sql.connect("app.db")
        cursor = connect.cursor()
        cursor.execute("SELECT m_userID FROM Messages")
        messages = cursor.fetchall()
        msgList = []
        for i in range(len(messages)):
                msgList.append(messages[i][0])
        messages = json.dumps(msgList)
        return messages

#GET MESSAGES
@app.route("/getMessages")
def getMessages():
        connect = sql.connect("app.db")
        cursor = connect.cursor()
        cursor.execute("SELECT m_message FROM Messages")
        messages = cursor.fetchall()
        msgList = []
        for i in range(len(messages)):
                msgList.append(messages[i][0])
        messages = json.dumps(msgList)
        return messages

#GET LAT
@app.route("/getLAT")
def getLAT():
        connect = sql.connect("app.db")
        cursor = connect.cursor()
        cursor.execute("SELECT m_latitude FROM Messages")
        messages = cursor.fetchall()
        msgList = []
        for i in range(len(messages)):
                msgList.append(messages[i][0])
        messages = json.dumps(msgList)
        return messages
        
#GET LNG
@app.route("/getLNG")
def getLNG():
        connect = sql.connect("app.db")
        cursor = connect.cursor()
        cursor.execute("SELECT m_longitude FROM Messages")
        messages = cursor.fetchall()
        msgList = []
        for i in range(len(messages)):
                msgList.append(messages[i][0])
        messages = json.dumps(msgList)
        return messages

#GET DATE
@app.route("/getDATE")
def getDATE():
        connect = sql.connect("app.db")
        cursor = connect.cursor()
        cursor.execute("SELECT m_date FROM Messages")
        messages = cursor.fetchall()
        msgList = []
        for i in range(len(messages)):
                msgList.append(messages[i][0])
        messages = json.dumps(msgList)
        return messages

#GET MSGID
@app.route("/getMSGID")
def getMSGID():
        connect = sql.connect("app.db")
        cursor = connect.cursor()
        cursor.execute("SELECT m_messageID FROM Messages")
        messages = cursor.fetchall()
        msgList = []
        for i in range(len(messages)):
                msgList.append(messages[i][0])
        messages = json.dumps(msgList)
        return messages

#POST COMMENT
@app.route("/postComment" ,  methods = ["GET", "POST"])
def postComment():
        if (request.method == "POST"):
                store = request.data
                parse = json.loads(store)
                parse = parse["postComment"]
                lat = parse["lat"]
                lng = parse["lng"]
                comment = parse["comment"]
                date = parse["date"]
                user = parse["user"]
                icon = parse["iconName"]
                print parse
                user = getUserID (user)
                insertComment(comment, lat, lng, date ,user, icon)
        return "cool"

def getUserID(user):
        connect = sql.connect("app.db")
        cursor = connect.cursor()  

        cursor.execute("SELECT u_userID FROM Users WHERE u_userName = ? ", (user,))
        store = cursor.fetchall()
        return store[0][0]

def insertComment(comment, lat, lng, date ,user, icon):
        connect = sql.connect("app.db")
        cursor = connect.cursor()
        cursor.execute('''INSERT INTO Messages 
        (m_userID, m_message, m_date, m_latitude, m_longitude, m_Icon) VALUES(?,?,?,?,?, ?)''', (user, comment, date, lat ,lng, icon))
        connect.commit()
        print "cool"


if __name__ == '__main__':
        app.run(debug =True)
