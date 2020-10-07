package apis

import (
	
	"net/http"
	"io"
	
)

func Predictor(id string) io.ReadCloser {
	REST_URL := "http://140.119.19.46:5000"+id

	req, _ := http.NewRequest("POST", REST_URL, nil)
	resp, _ := http.DefaultClient.Do(req)
	return resp.Body
	

}
