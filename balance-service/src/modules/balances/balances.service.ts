import { Injectable } from '@nestjs/common';

@Injectable()
export class BalancesService {
  findBalanceById(id: string): string {
    return `Hello World, ${id}!`;
  }
}
