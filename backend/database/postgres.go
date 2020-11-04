package database

import (
	// "os"
	"database/sql"
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/lib/pq"
)

const (
	// Initialize connection constants.
	HOST     = "140.119.19.46"
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

func StorePrediction(MD5 string, size float64, malicious float64) {
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

func SearchStaticPrediction(MD5 string) gin.H {
	connectionString := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", HOST, PORT, USER, PASSWORD, DATABASE)
	db, err := sql.Open("postgres", connectionString)
	checkError(err)

	//test
	err = db.Ping()
	checkError(err)
	fmt.Println("Successfully created connection to database")

	var malicious, size float32
	var number_of_section int
	var imported_apis, dlls []string

	// var gray_scale [][]int
	sql_statement := "SELECT md5, malicious, size, number_of_section, imported_apis, dlls FROM static_prediction WHERE md5 = $1"
	row := db.QueryRow(sql_statement, MD5)
	fmt.Println("Select 1 row of data")
	err = row.Scan(&MD5, &malicious, &size, &number_of_section, pq.Array(&imported_apis), pq.Array(&dlls))
	if err != nil {
		return nil
	}
	result := gin.H{
		"MD5":               MD5,
		"malicious":         malicious,
		"size":              size,
		"number_of_section": number_of_section,
		"imported_api":      imported_apis,
		"dlls":              dlls,
	}
	return result
}
