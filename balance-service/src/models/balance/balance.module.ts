import { Module } from '@nestjs/common';
import { BalanceUseCase } from '../../usecases/balance.usecase';
import { BalanceController } from './balance.controller';
import { BalanceRepository } from 'src/models/balance/balance.repository';
import { DatabaseModule } from 'src/config/database/database.module';
import { balanceProvider } from 'src/provider/balance.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [BalanceController],
  providers: [
    ...balanceProvider,
    BalanceRepository,
    BalanceUseCase,
  ],
})

export class BalanceModule {}
