package apis

import (
	"github.com/gin-gonic/gin"
)

func ReportGenerator(ctx *gin.Context) {

	ctx.JSON(200, gin.H{
		"malicious":"true",
		"att_type": "worm",
		"class": "a",
	})
}