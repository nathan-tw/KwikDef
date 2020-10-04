package apis

import (
	"io"
	"mime/multipart"
	"net/http"
	"fmt"
	"bytes"
	"io/ioutil"
)

func TaskSubmitter(file *multipart.FileHeader) {
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
	bodyBytes, _ := ioutil.ReadAll(resp.Body)
	bodyString := string(bodyBytes)
	fmt.Println(bodyString)

}
