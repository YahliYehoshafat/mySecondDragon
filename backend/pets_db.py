import pymysql
from datetime import datetime


pets_db = pymysql.connect(
  host="localhost",
  user="root",
  password="Shtuzon@1",
  database="petsdb"
)
my_cursor = pets_db.cursor()

def insert_to_db(action_type: str, energy: int, hunger: str, happiness: str) -> None:
    sql = "INSERT INTO pets_db (action_type, energy, hunger, happiness, timestamp) VALUES (%s, %s, %s, %s. %s)"
    val = (action_type, energy, hunger, happiness, datetime.now())
    my_cursor.execute(sql, val)
    pets_db.commit()
    print(my_cursor.rowcount, "record inserted.")