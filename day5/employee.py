import pymysql
conn = pymysql.connect(
    host="localhost",
    user="root",
    password="root",
    database="task"
)

cmd = conn.cursor()
cmd.execute("select emp_id,emp_name,department from employees")
result = cmd.fetchall()
print("Employee Details")
print(f"ID: {result[0][0]}")
print(f"name: {result[0][1]}")
print(f"Department: {result[0][2]}")
conn.close()