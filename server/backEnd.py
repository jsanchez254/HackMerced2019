from flask import Flask, request
import sqlite3 as sql
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

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
        cursor.execute("SELECT m_longitude FROM Messages")
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
        messages = json.dumps(messages)
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
                print parse
                insertComment(comment, lat, lng, date ,user)
        return "cool"

def insertComment(comment, lat, lng, date ,user):
        connect = sql.connect("app.db")
        cursor = connect.cursor()
        cursor.execute('''INSERT INTO Messages 
        (m_userID, m_message, m_date, m_latitude, m_longitude) VALUES(?,?,?,?,?)''', (user, comment, date, lng ,lat))
        connect.commit()
        print "cool"


if __name__ == '__main__':
        app.run(debug =True)