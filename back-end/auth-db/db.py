import psycopg2
import os 
from dotenv import load_dotenv

load_dotenv()

def getConnection():
    conn = psycopg2.connect(
        host = os.getenv("DB_HOST"),
        database = os.getenv("DB_NAME"),
        user = os.getenv("DB_USER"),
        password = os.getenv("DB_PASS"),
        port = os.getenv("DB_PORT")
    )
    return conn

