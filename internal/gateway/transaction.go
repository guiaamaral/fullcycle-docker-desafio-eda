package gateway

import "github.com/guiaamaral/fullcycle-ms-wallet/internal/entity"

type TransactionGateway interface {
	Create(transaction *entity.Transaction) error
}
