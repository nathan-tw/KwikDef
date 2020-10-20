package main

import (
	// "os"
	"fmt"
	"database/sql"
	_ "github.com/lib/pq"
)

const (
    // Initialize connection constants.
	HOST     = "127.0.0.1"
	PORT     = 5432
    DATABASE = "postgres"
    USER     = "postgres"
    PASSWORD = "ilove163"
)

func checkError(err error) {
    if err != nil {
        panic(err)
    }
}

func main() {
	connectionString := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", HOST, PORT, USER, PASSWORD, DATABASE)
	db, err := sql.Open("postgres", connectionString)
	checkError(err)

	//test
	err = db.Ping()
	checkError(err)
	fmt.Println("Successfully created connection to database")
	
	sql_statement := "INSERT INTO dynamic_prediction (md5, size, malicious) VALUES ($1, $2, $3);"
	_, err = db.Exec(sql_statement, "goij346246jlj574t3ipow34058", 0.0234, 0.8)
	checkError(err)
	fmt.Println("Inserted 1 row of data")
}
