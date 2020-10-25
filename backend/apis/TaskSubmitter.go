package apis

import (
	"io/ioutil"
	"io"
	"mime/multipart"
	"net/http"
	"bytes"
)

func DynamicTaskSubmitter(fh *multipart.FileHeader) []byte {
	REST_URL := "http://140.119.19.46:8090/tasks/create/file"
	f, err := fh.Open()
	if err != nil {
		panic("error when open file")
	}
	bodyBuf := &bytes.Buffer{}                                                                                                                   
	bodyWriter := multipart.NewWriter(bodyBuf)  
	md5 := HashComputer(fh)
	fileWriter, err := bodyWriter.CreateFormFile("file", md5)  
	if err != nil {
		panic("error when create form file")
	}                                                                                
	_, err = io.Copy(fileWriter, f)
	if err != nil{
		panic("error when copy")
	}
	contentType := bodyWriter.FormDataContentType()
	bodyWriter.Close()
	req, err := http.NewRequest("POST", REST_URL, bodyBuf)
	if err != nil {
		panic("error when make a request")
	}
	req.Header.Set("Content-Type", contentType)
	req.Header.Add("Authorization", "Bearer 1otpa8k6IlPzM2Qu0TLP3g")
	resp, err := http.DefaultClient.Do(req)

	if err != nil {
		panic("error when request")
	}

	bodyBytes, _ := ioutil.ReadAll(resp.Body)

	return bodyBytes
}

func StaticTaskSubmitter(fh *multipart.FileHeader) []byte {

}
