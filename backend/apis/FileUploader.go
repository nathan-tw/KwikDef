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
		ctx.Next()
		return
	}
	f, err := file.Open()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"error": err,
		})
		ctx.Next()
		return
	}
	
	if analysisType == "static" {
		// call static model
		http.Post("", "multipart/form-data", f)
	} else {
		// taskId (type: []byte) := TaskSubmitter(file)
		// add task to worker
	}
	hash := HashComputer(file)
	
	

	
	ctx.JSON(http.StatusOK, gin.H{
		"md5": hash,
		"analysisType": analysisType,
	})


	ctx.Next()
}