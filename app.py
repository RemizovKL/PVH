from sys import exit
from flask import Flask
from db.InitializeDB import init_database
from db.InitializeDBData import add_products

init_database()

add_products()

app = Flask(__name__)
