import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from "@nestjs/microservices";
import { KafkaMessage } from '@nestjs/microservices/external/kafka.interface';
import { ConsumerService } from './consumer.service';

@Controller()
export class ConsumerController {
  constructor(private consumerService: ConsumerService) {}

  @MessagePattern('balances')
  getMessage(@Payload() message: KafkaMessage) {
    return this.consumerService.getMessage(message);
  }
}
