export class BalanceDto {
    Name: string
    Payload: BalancePayloadDto
}

class BalancePayloadDto {
    account_id_from: string
    balance_account_id_from: number
    account_id_to: string
    balance_account_id_to: number
}