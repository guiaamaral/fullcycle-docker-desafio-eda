import { Module } from '@nestjs/common';
import { BalancesModule } from './modules/balances/balances.module';
import { ConsumerModule } from './modules/consumer/consumer.module';

@Module({
  imports: [BalancesModule, ConsumerModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
