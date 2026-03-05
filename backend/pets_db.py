import pymysql
from datetime import datetime


pets_db = pymysql.connect(
  host="localhost",
  user="root",
  password="Shtuzon@1",
  database="petsdb"
)
my_cursor = pets_db.cursor()


def insert_to_db(action_type: str, energy: int, hunger: str, happiness: str, pet_profile: float) -> None:
    sql = "INSERT INTO pets_info (action_type, energy, hunger, happiness, timestamp, pet_profile) VALUES (%s, %s, %s, %s, %s, %s)"
    val = (action_type, energy, hunger, happiness, datetime.now(), pet_profile)
    my_cursor.execute(sql, val)
    pets_db.commit()
    print(my_cursor.rowcount, "record inserted.")


def pet_profile_under() -> int:
    sql = "SELECT * FROM pets_info WHERE pet_profile <  70;"
    my_cursor.execute(sql)
    myresult = my_cursor.fetchall()
    return len(myresult)


sql = "SELECT timestamp FROM pets_info ORDER BY happiness DESC;"
my_cursor.execute(sql)
myresult = my_cursor.fetchall()
print(str(myresult[0]))

sql = "SELECT action_type, COUNT(*) AS action_type FROM pets_info GROUP BY action_type ORDER BY action_type DESC LIMIT 1;"
my_cursor.execute(sql)
myresult = my_cursor.fetchall()
for x in myresult:
  print(x)
