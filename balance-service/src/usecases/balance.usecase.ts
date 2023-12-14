import { Injectable } from '@nestjs/common';
import { BalanceRepository } from 'src/models/balance/balance.repository';
import { Balance } from 'src/models/balance/entities/balance.entity';

@Injectable()
export class BalanceUseCase {
  constructor(private balanceRepository: BalanceRepository) {}

  async execute(id: string): Promise<Balance> {
    return await this.balanceRepository.findById(id);
  }
}
