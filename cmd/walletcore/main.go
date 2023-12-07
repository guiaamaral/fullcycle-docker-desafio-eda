package main

import (
	"database/sql"
	"fmt"

	"github.com/guiaamaral/fullcycle-ms-wallet/internal/database"
	"github.com/guiaamaral/fullcycle-ms-wallet/internal/event"
	"github.com/guiaamaral/fullcycle-ms-wallet/internal/usecase/create_account"
	"github.com/guiaamaral/fullcycle-ms-wallet/internal/usecase/create_client"
	"github.com/guiaamaral/fullcycle-ms-wallet/internal/usecase/create_transaction"
	"github.com/guiaamaral/fullcycle-ms-wallet/internal/web"
	"github.com/guiaamaral/fullcycle-ms-wallet/internal/web/webserver"
	"github.com/guiaamaral/fullcycle-ms-wallet/pkg/events"
)

func main() {
	db, err := sql.Open("mysql", fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8&parseTime=True&loc=Local", "root", "root", "localhost", "3306", "wallet"))
	if err != nil {
		panic(err)
	}
	defer db.Close()

	eventDispatcher := events.NewEventDispatcher()
	TransactionCreatedEvent := event.NewTransactionCreated()
	// eventDispatcher.Register("TransactionCreated", handler)

	clientDb := database.NewClientDB(db)
	accountDb := database.NewAccountDB(db)
	transactionDb := database.NewTransactionDB(db)

	createClientUseCase := create_client.NewCreateClientUseCase(clientDb)
	createAccountUseCase := create_account.NewCreateAccountUseCase(accountDb, clientDb)
	createTransactionUseCase := create_transaction.NewCreateTransactionUseCase(transactionDb, accountDb, eventDispatcher, TransactionCreatedEvent)

	webserver := webserver.NewWebServer(":3000")

	clientHandler := web.NewWebClientHandler(*createClientUseCase)
	accountHandler := web.NewWebAccountHandler(*createAccountUseCase)
	transactionHandler := web.NewWebTransactionHandler(*createTransactionUseCase)

	webserver.AddHandler("/clients", clientHandler.CreateClient)
	webserver.AddHandler("/accounts", accountHandler.CreateAccount)
	webserver.AddHandler("/transactions", transactionHandler.CreateTransaction)

	webserver.Start()
}