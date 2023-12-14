import { Injectable } from '@nestjs/common';
import { BalanceDto } from 'src/models/balance/dto/balance.dto';
import { BalanceRepository } from 'src/models/balance/balance.repository';

@Injectable()
export class ConsumerUseCase {
  constructor(private balanceRepository: BalanceRepository) {}

  async execute(message: BalanceDto): Promise<void> {
    const searchAccounts = await Promise.all([
      this.balanceRepository.findById(message.Payload.account_id_from),
      this.balanceRepository.findById(message.Payload.account_id_to),
    ]);
    const accountIdFrom = searchAccounts[0];
    const accountIdTo = searchAccounts[1];

    if (!accountIdFrom) {
      await this.balanceRepository.insert({
        accountId: message.Payload.account_id_from,
        balance: message.Payload.balance_account_id_from,
      });
    } else {
      await this.balanceRepository.updateById(accountIdFrom.accountId, message.Payload.balance_account_id_from);
    }

    if (!accountIdTo) {
      await this.balanceRepository.insert({
        accountId: message.Payload.account_id_to,
        balance: message.Payload.balance_account_id_to,
      });
    } else {
      await this.balanceRepository.updateById(accountIdTo.accountId, message.Payload.balance_account_id_to);
    }
  }
}
