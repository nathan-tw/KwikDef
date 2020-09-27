package upload

import(
	"fmt"
	"net/http"
	"path/filepath"

	"github.com/gin-gonic/gin"
)

func FileUploader(ctx *gin.Context) {
	file, err := ctx.FormFile("file")
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"error": err,
		})
	}

	filepath := filepath.Base(file.Filename) 
	ctx.JSON(http.StatusOK, gin.H{
		"fileName": file.Filename,
		"filePath": filepath,
		"size":     file.Size,
		"mimeType": file.Header,
	})

	
	if err := ctx.SaveUploadedFile(file, filepath); err != nil{
		ctx.String(400, fmt.Sprintf("upload file error: %s", err.Error()))
		return
	}
	
}