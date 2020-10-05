package apis

import (
	
	"net/http"
	"io"
	
)

func ReportGenerator(id string) io.ReadCloser {
	REST_URL := "http://localhost:8090/tasks/report/"+id

	req, _ := http.NewRequest("GET", REST_URL, nil)
	req.Header.Set("Authorization", "Bearer 1otpa8k6IlPzM2Qu0TLP3g")
	resp, _ := http.DefaultClient.Do(req)
	return resp.Body
	

}
