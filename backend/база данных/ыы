import sqlite3

def insert_data():
    # Подключение к базе данных
    conn = sqlite3.connect('sports_database.db')
    cur = conn.cursor()

    # Пример добавления данных в таблицу "Спортсмены"
    cur.execute("INSERT INTO Sportsmen (Name, Surname, Age, Gender, Country, Sport) VALUES (?, ?, ?, ?, ?, ?)",
                ('Иван', 'Иванов', 25, 'М', 'Россия', 'Футбол'))

    # Пример добавления данных в таблицу "Тренеры"
    cur.execute("INSERT INTO Coaches (Name, Surname, Specialization, Country, Contact_Info) VALUES (?, ?, ?, ?, ?)",
                ('Петр', 'Петров', 'Футбол', 'Россия', 'peter@example.com'))

    # Пример добавления данных в таблицу "Соревнования"
    cur.execute("INSERT INTO Competitions (Name, Start_Date, End_Date, Location, Sport) VALUES (?, ?, ?, ?, ?)",
                ('Чемпионат мира по футболу', '2024-06-01', '2024-07-01', 'Россия', 'Футбол'))

    # Сохранение изменений и закрытие соединения
    conn.commit()
    conn.close()

if __name__ == "__main__":
    insert_data()
    print("Данные успешно добавлены в базу данных.")