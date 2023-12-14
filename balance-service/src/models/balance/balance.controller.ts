import { Controller, Get, Param } from '@nestjs/common';
import { BalanceUseCase } from '../../usecases/balance.usecase';
import { Balance } from 'src/models/balance/entities/balance.entity';

@Controller('balances')
export class BalanceController {
  constructor(private balanceUseCase: BalanceUseCase) {}

  @Get(':account_id')
  findBalanceById(@Param('account_id') account_id: string): Promise<Balance> {
    return this.balanceUseCase.execute(account_id);
  }
}
