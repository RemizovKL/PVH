import sqlite3
import json
from loguru import logger as log

def init_database():
    conn = sqlite3.connect('products.db')
    cursor = conn.cursor()

    cursor.execute('''
    CREATE TABLE IF NOT EXISTS Category (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        atributes TEXT NOT NULL
    )
    ''')

    cursor.execute('''
    CREATE TABLE IF NOT EXISTS Product (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        category INTEGER NOT NULL,
        desc TEXT,
        image_path TEXT,
        size TEXT,
        FOREIGN KEY (category) REFERENCES Category (id)
    )
    ''')
    
    conn.commit()
    conn.close()
    log.info("База данных успешно инициализирована!")
