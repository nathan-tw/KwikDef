package apis


type FinalReport struct {
	Malicious bool    `json:"malicious"`
	Att_type  AttType `json:"att_type"`
	Family    Family
}

type AttType struct {
	Worm  int `json:"worm"`
	Virus int `json:"virus"`
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
