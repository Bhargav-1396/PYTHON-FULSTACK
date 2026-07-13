import mysql.connector
openconn=mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="xyz")
cmd=openconn.cursor()
query="""create table student(
s_id int UNIQUE,
s_name varchar(20) NOT NULL,
s_branch varchar(10) NOT NULL);
"""
cmd.execute(query)
print("Table is created")
openconn.commit()
openconn.close()