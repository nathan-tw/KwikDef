package apis

import (
	"io"
	"mime/multipart"
	"net/http"
	"bytes"
)

func TaskSubmitter(file *multipart.FileHeader) io.ReadCloser {
	REST_URL := "http://localhost:8090/tasks/create/file"
	f, _ := file.Open()
	bodyBuf := &bytes.Buffer{}                                                                                                                   
	bodyWriter := multipart.NewWriter(bodyBuf)                                                                                                   
	fileWriter, _ := bodyWriter.CreateFormFile("file", "test")                                                                                   
	_, _ = io.Copy(fileWriter, f)                                                                                                                

	req, _ := http.NewRequest("POST", REST_URL, bodyBuf)
	req.Header.Set("Content-Type", "multipart/form-data")
	req.Header.Add("Authorization", "Bearer wbo4kmKnxvbP6ehTlJZcwQ")
	resp, _ := http.DefaultClient.Do(req)
	return resp.Body

}
