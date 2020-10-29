package database

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

func StorePrediction(MD5 string, size float64, malicious float64 ) {
	connectionString := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", HOST, PORT, USER, PASSWORD, DATABASE)
	db, err := sql.Open("postgres", connectionString)
	checkError(err)

	//test
	err = db.Ping()
	checkError(err)
	fmt.Println("Successfully created connection to database")
	
	sql_statement := "INSERT INTO dynamic_prediction (md5, size, malicious) VALUES ($1, $2, $3);"
	_, err = db.Exec(sql_statement, MD5, size, malicious)
	checkError(err)
	fmt.Println("Inserted 1 row of data")
}

func SearchPrediction(MD5 string) {
	connectionString := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", HOST, PORT, USER, PASSWORD, DATABASE)
	db, err := sql.Open("postgres", connectionString)
	checkError(err)

	//test
	err = db.Ping()
	checkError(err)
	fmt.Println("Successfully created connection to database")
	
	sql_statement := "SELECT * FROM dynamic_prediction WHERE (md5) VALUES ($1);"
	_, err = db.Exec(sql_statement, MD5)
	checkError(err)
	fmt.Println("Select 1 row of data")
}