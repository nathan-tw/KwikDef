import psycopg2

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

