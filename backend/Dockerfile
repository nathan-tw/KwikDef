FROM golang:alpine

WORKDIR /usr/gin_api

COPY go.mod .
COPY go.sum .
RUN go mod download

COPY . .

CMD [ "go", "run", "server.go" ]

EXPOSE 8080