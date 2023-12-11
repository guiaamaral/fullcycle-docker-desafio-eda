import { Controller, Get, Param } from '@nestjs/common';
import { BalancesService } from './balances.service';

@Controller('balances')
export class BalancesController {
  constructor(private balancesService: BalancesService) {}

  @Get(':account_id')
  findBalanceById(@Param('account_id') account_id: string): string {
    return this.balancesService.findBalanceById(account_id);
  }
}
