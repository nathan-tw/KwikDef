package main

import (


	"github.com/nathan-tw/KwikDef/apis"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

)



func main() {

	r := gin.Default()

	r.Use(cors.Default())

	r.POST("/file/submit", apis.FileUploader)
	r.GET("/report/:id", apis.GetReport)
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "hello",
		})
	})

	r.Run()


}




