# KwikDef

```KwikDef``` is a Malware analysis system for NCCU MIS graduate project, combined with static and dynamic analysis. Using react as frontend and golang as backend server. Dynamic and static models are pre-trained based on supervised learning using malwares collected by **DDHS**(Taiwan Department of Digital Homeland Security)

<img src=https://github.com/nathan-tw/KwikDef/blob/master/system_metadata/arch.png width="900">


## usage

```zsh
docker-compose up
```
Todo list will be done in following days respectively before December. React-app is listening on port 3000 and go-server on port 8080 as well. Just check if two of them are not occupied and visit ```localhost:3000``` is good to go.


## todo 

### backend

- <del> fileUploader
- <del> hashComputer
- reportGenerator
- cuckooSubmitter
- modelPredictor
- databaseConnector

### frontend

- <del> welcomePage
- <del> submitPage
- <del> reportPage

### database

- <del> Postgresql

### models

- <del> static
- <del> dynamic

### worker

- reportRequester
- featureSender