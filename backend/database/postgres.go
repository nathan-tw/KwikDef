package database

import (
	"os"
	"fmt"
	"database/sql"
)

var (
    // Initialize connection constants.
    HOST     = os.Getenv("PGHOST")
    DATABASE = os.Getenv("PGDATABASE")
    USER     = os.Getenv("PGUSER")
    PASSWORD = os.Getenv("PGPASSWORD")
	PORT = os.Getenv("PGPORT")
)

func checkError(err error) {
    if err != nil {
        panic(err)
    }
}

func NewPostgresClient(md5_hash string) {
	connectionString := fmt.Sprintf("host=%s user=%s password=%s dbname=%s sslmode=require", HOST, USER, PASSWORD, DATABASE)
	db, err := sql.Open("postgres", connectionString)
	checkError(err)

	//test
	err = db.Ping()
	checkError(err)
	fmt.Println("Successfully created connection to database")
	
	sql_statement := "INSERT INTO hashfiles (hash) VALUES ($1);"
    _, err = db.Exec(sql_statement, md5_hash)

}
