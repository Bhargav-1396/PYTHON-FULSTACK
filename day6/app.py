from flask import Flask,render_template
import mysql.connector
def getConnection():
    conn=mysql.connector.connect(
        host="localhost",
        user="root",
        password="root",
        database="project"
    )
    return conn
app = Flask("__name__")
@app.route("/")
def home():
    return "hello world"

@app.route("/bhargav")
def load():
    return render_template("index.html")

@app.route("/<sid>/<sname>/<sbranch>")
def getData(sid,sname,sbranch):
    conn=getConnection()
    cmd=conn.cursor()
    cmd.execute("insert into student values(%s,%s,%s)",(sid,sname,sbranch))
    conn.commit()
    conn.close()
    return "data inserted to your table goto check meeeeeee"



if __name__ == "__main__":
    app.run(debug=True)