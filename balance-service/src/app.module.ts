import { Module } from '@nestjs/common';
import { BalanceModule } from './models/balance/balance.module';
import { ConsumerModule } from './models/consumer/consumer.module';

@Module({
  imports: [
    BalanceModule,
    ConsumerModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
