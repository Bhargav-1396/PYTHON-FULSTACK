import pymysql
conn = pymysql.connect(
    host="localhost",
    user="root",
    password="root",
    database="abc"
)

cmd = conn.cursor()
id = int(input("Enter student id: "))
name = input("Enter student name:")
cmd.execute("INSERT INTO deeemo VALUES(%s,%s)",(id,name))
print("Table created!!!")
conn.commit()
conn.close()