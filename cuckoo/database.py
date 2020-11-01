import psycopg2
import static_model

def store_static_prediction(*args):
    # Update connection string information
    host = "140.119.19.46"
    dbname = "postgres"
    user = "postgres"
    password = "ilove163"
    sslmode = "disable"

    # Construct connection string
    conn_string = f"host={host} user={user} dbname={dbname} password={password} sslmode={sslmode}"
    conn = psycopg2.connect(conn_string)
    print("Connection established")

    cursor = conn.cursor()
    statement = f'insert into static_prediction values (%s, %s, %s, %s, %s, %s, %s);'

    # Insert some data into the table
    cursor.execute(statement, args[0])
    print('insert sucessfully')
    # Clean up
    conn.commit()
    cursor.close()
    conn.close()

if __name__ == "__main__":
    with open('/home/atsl/Desktop/malware/016/md5_new_2017/c44d369e8c39ed718c10d0f9e3f2e650', 'rb') as f:
        data = f.read()
    res = static_model.static_main(data, 'test')
