FROM golang:1.21
WORKDIR /app
COPY . .
RUN apt-get update && apt-get install -y librdkafka-dev
RUN go mod tidy \
    && go build cmd/walletcore/main.go

CMD ["./main"]