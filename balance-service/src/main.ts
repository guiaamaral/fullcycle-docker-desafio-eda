import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        // brokers: ['kafka:29092'],
        brokers: ['localhost:9092'],
      },
    },
  });

  await app.listen(3003);
}

bootstrap();
