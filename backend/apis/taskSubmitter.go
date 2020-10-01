package apis

import (
	"mime/multipart"
	"net/http"
	"fmt"
	"io/ioutil"
)

func TaskSubmitter(file *multipart.FileHeader) {
	REST_URL := "http://localhost:8090/tasks/create/file"
	f, _ := file.Open()



	req, _ := http.NewRequest("POST", REST_URL, f)
	req.Header.Set("Content-Type", "multipart/form-data")
	req.Header.Add("Authorization", "wbo4kmKnxvbP6ehTlJZcwQ")
	resp, _ := http.DefaultClient.Do(req)
	bodyBytes, _ := ioutil.ReadAll(resp.Body)
	bodyString := string(bodyBytes)
	fmt.Println(bodyString)

}