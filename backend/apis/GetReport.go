package apis

import(
	"os"
	"github.com/gin-gonic/gin"

)


func GetReport(ctx *gin.Context) {
	jsonFile, _ := os.Open("../frontend/public/test_form.json")
	fileInfo, _ := jsonFile.Stat()
	b1 := make([]byte, fileInfo.Size())
	jsonFile.Read(b1)
	ctx.Data(200, "application/json", b1)
	




	ctx.Next()
}