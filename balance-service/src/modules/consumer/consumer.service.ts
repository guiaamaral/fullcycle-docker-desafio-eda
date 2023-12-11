import { Injectable } from '@nestjs/common';
import { KafkaMessage } from '@nestjs/microservices/external/kafka.interface';

@Injectable()
export class ConsumerService {
  getMessage(message: KafkaMessage): KafkaMessage {
    return message;
  }
}
