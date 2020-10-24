package apis

import(
	"net/http"
	"github.com/gin-gonic/gin"

)




func FileUploader(ctx *gin.Context) {
	file, err := ctx.FormFile("file")
	analysisType := ctx.PostForm("analysisType")
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"error": err,
		})
	}

	hash := HashComputer(file)

	// jsonFile, _ := os.Open("/home/nathan/workspace/KwikDef/backend/apis/fake_predict.json")
	// jsonByte, _ := ioutil.ReadAll(jsonFile)
	// var finalReport FinalReport
	// json.Unmarshal(jsonByte, &finalReport)
	
	

	//respBody := TaskSubmitter(file)
	ctx.JSON(http.StatusOK, gin.H{
		"md5": hash,
		"analysisType": analysisType,
	})


	ctx.Next()
}