import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from "@nestjs/microservices";
import { ConsumerUseCase } from '../../usecases/consumer.usecase';
import { BalanceDto } from 'src/models/balance/dto/balance.dto';

@Controller()
export class ConsumerController {
  constructor(private consumerUseCase: ConsumerUseCase) {}

  @MessagePattern('balances')
  createOrUpdateBalance(@Payload() message: BalanceDto) {
    console.log(`New event from 'balances' topic`)
    return this.consumerUseCase.execute(message);
  }
}
