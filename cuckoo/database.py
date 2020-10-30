import psycopg2

def store_static_prediction(*args):
    # Update connection string information 
    host = "127.0.0.1"
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

# if __name__ == "__main__":
#     report = {
#         'md5': 'f23o4ifhkwe',
#         'malicious': 0.312,
#         'size': 23.4,
#         'number_of_section': 4,
#         'dlls': ['23fiou', '2fhuui'],
#         'top10_imported_apis': ['23fiou', '2fhuui'],
#         'gray_scale': [[1, 2, 3], [2, 4, 5]]
#     }

#     args = [item for item in report.values()]
#     store_static_prediction(args)