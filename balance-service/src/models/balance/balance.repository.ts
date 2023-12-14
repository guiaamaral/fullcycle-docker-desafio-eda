import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Balance } from 'src/models/balance/entities/balance.entity';

@Injectable()
export class BalanceRepository {
    constructor(
        @Inject('BALANCE_REPOSITORY')
        private balanceRepository: Repository<Balance>,
    ) { }

    async findById(account_id: string): Promise<Balance> | null {
        console.log(`repository::findById::${account_id}`)
        return this.balanceRepository.findOneBy({ accountId: account_id });
    }

    async insert(balance: Balance): Promise<void> {
        console.log(`repository::insert`)
        this.balanceRepository.save(balance);
    }

    async updateById(account_id: string, balance: number): Promise<void> {
        console.log(`repository::updateById::${account_id}`)
        this.balanceRepository.update({ accountId: account_id }, { balance: balance });
    }
}
