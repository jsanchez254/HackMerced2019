from flask import Flask, request
import sqlite3 as sql
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/test" ,  methods = ["GET", "POST"])
def test():
    return "cool"

if __name__ == '__main__':
        app.run(debug =True)