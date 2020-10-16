package apis


type FinalReport struct {
	MD5 bool    `json:"MD5"`
	Att_type  AttType `json:"Att_type"`
	Family    Family
}

type AttType struct {
	Adware  int `json:"Adware"`
	Backdoor int `json:"Backdoor"`
}

type Family struct {
	FamilyA int `json:"familyA"`
	FamilyB int `json:"familyB"`
	FamilyC int `json:"familyC"`
	FamilyD int `json:"familyD"`
	FamilyE int `json:"familyE"`
	FamilyF int `json:"familyF"`
	FamilyG int `json:"familyG"`
	FamilyH int `json:"familyH"`
	FamilyI int `json:"familyI"`
	FamilyJ int `json:"familyJ"`
}
