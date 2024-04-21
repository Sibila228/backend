import sqlite3

# Создание соединения с базой данных
conn = sqlite3.connect('sports_database.db')

# Создание курсора для выполнения SQL-запросов
cur = conn.cursor()

# Создание таблицы "Спортсмены"
cur.execute('''CREATE TABLE IF NOT EXISTS Sportsmen (
                ID INTEGER PRIMARY KEY,
                Name TEXT,
                Surname TEXT,
                Age INTEGER,
                Gender TEXT,
                Country TEXT,
                Sport TEXT,
                Results TEXT
                )''')

# Создание таблицы "Тренеры"
cur.execute('''CREATE TABLE IF NOT EXISTS Coaches (
                ID INTEGER PRIMARY KEY,
                Name TEXT,
                Surname TEXT,
                Specialization TEXT,
                Country TEXT,
                Contact_Info TEXT
                )''')

# Создание таблицы "Соревнования"
cur.execute('''CREATE TABLE IF NOT EXISTS Competitions (
                ID INTEGER PRIMARY KEY,
                Name TEXT,
                Start_Date TEXT,
                End_Date TEXT,
                Location TEXT,
                Sport TEXT,
                Participants TEXT
                )''')

# Сохранение изменений и закрытие соединения
conn.commit()
conn.close()
