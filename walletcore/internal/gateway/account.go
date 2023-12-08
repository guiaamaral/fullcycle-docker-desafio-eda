package gateway

import "github.com/guiaamaral/fullcycle-ms-wallet/internal/entity"

type AccountGateway interface {
	Save(client *entity.Account) error
	FindById(id string) (*entity.Account, error)
	UpdateBalance(account *entity.Account) error
}
