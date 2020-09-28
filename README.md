# KwikDef

```KwikDef``` is a Malware analysis system, combined with static and dynamic analysis. Using react as frontend and golang as backend server. Dynamic and static models are pre-trained based on supervised learning using malwares collected by **DDHS**(Taiwan Department of Digital Homeland Security)

<img src=https://github.com/nathan-tw/KwikDef/blob/master/system_metadata/arch.png width="900">


## usage

```zsh
docker-compose up
```
React-app is listening on port 3000 and go-server on port 8080 as well. Just chech if two of them are not occupied and visit localhost:3000 is good to go.


## todo 

### backend

- <del> fileUploader
- hashComputer
- reportGenerator
- cuckooSubmitter
- modelPredictor

### frontend

- welcomePage
- submitPage
- loginPage
- reportPage

### database

- Postgresql

### models

- static
- dynamic
