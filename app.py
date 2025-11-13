from sys import exit
from flask import Flask

init_database()

add_products()

app = Flask(__name__)
