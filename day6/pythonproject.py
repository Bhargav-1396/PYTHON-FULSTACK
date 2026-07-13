import pymysql

conn=pymysql.connect(
host="localhost",
user="root",
password="root",
database="project"
)




print("Enter student details")
s_id=int(input("Enter student ID: "))
s_name=input("Enter student name: ")
s_branch=input("Enter student branch: ")
print("record inserted successfulllllllllllllllll")
cmd=conn.cursor()
cmd.execute("insert into student values(%s,%s,%s)",(s_id,s_name,s_branch))
conn.commit()
conn.close()
