package apis

import (
	"encoding/hex"
	"mime/multipart"
	"io"
	"crypto/md5"
)

func  HashComputer(file *multipart.FileHeader) string {
	hasher := md5.New()
	f, err := file.Open()
	if err != nil{
		return "1"
	}
	_, err = io.Copy(hasher, f)
	if err != nil{
		return "2"
	}
	md5str := hex.EncodeToString(hasher.Sum(nil))
	
	return md5str
}