import oracledb
from app.config import DB_CONFIG

def get_db_connection():
    dsn = oracledb.makedsn(
        DB_CONFIG['host'],
        DB_CONFIG['port'],
        service_name=DB_CONFIG['service_name']
    )
    conn = oracledb.connect(
        user=DB_CONFIG['user'],
        password=DB_CONFIG['password'],
        dsn=dsn
    )
    return conn
