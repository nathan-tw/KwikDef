package apis

import(
	"fmt"
	"net/http"
	"path/filepath"
	"encoding/json"
	"os"
	"io/ioutil"


	"github.com/gin-gonic/gin"

)




func FileUploader(ctx *gin.Context) {
	file, err := ctx.FormFile("file")
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"error": err,
		})
	}

	// hash := HashComputer(file)

	jsonFile, _ := os.Open("/home/nathan/workspace/KwikDef/backend/apis/fake_predict.json")
	jsonByte, _ := ioutil.ReadAll(jsonFile)

	var finalReport FinalReport
	json.Unmarshal(jsonByte, &finalReport)
	
	

	

	filepath := filepath.Base(file.Filename) 
	if err := ctx.SaveUploadedFile(file, filepath); err != nil{
		ctx.String(400, fmt.Sprintf("upload file error: %s", err.Error()))
		return
	}

	ctx.JSON(http.StatusOK, finalReport)
	ctx.Next()
}