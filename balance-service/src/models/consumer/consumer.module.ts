import { Module } from '@nestjs/common'
import { ConsumerController } from './consumer.controller';
import { ConsumerUseCase } from '../../usecases/consumer.usecase';
import { BalanceRepository } from 'src/models/balance/balance.repository';
import { balanceProvider } from 'src/provider/balance.provider';
import { DatabaseModule } from 'src/config/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ConsumerController],
  providers: [
    ...balanceProvider,
    BalanceRepository,
    ConsumerUseCase,
  ],
})

export class ConsumerModule {}
