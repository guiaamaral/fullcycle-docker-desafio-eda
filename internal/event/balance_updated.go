package event

import "time"

type BalanceUpdates struct {
	Name    string
	Payload interface{}
}

func NewBalanceUpdated() *BalanceUpdates {
	return &BalanceUpdates{
		Name: "BalanceUpdated",
	}
}

func (e *BalanceUpdates) GetName() string {
	return e.Name
}

func (e *BalanceUpdates) GetPayload() interface{} {
	return e.Payload
}

func (e *BalanceUpdates) SetPayload(payload interface{}) {
	e.Payload = payload
}

func (e *BalanceUpdates) GetDateTime() time.Time {
	return time.Now()
}
