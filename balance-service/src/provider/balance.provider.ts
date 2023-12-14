import { DataSource } from 'typeorm';
import { Balance } from 'src/models/balance/entities/balance.entity';


export const balanceProvider = [
  {
    provide: 'BALANCE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Balance),
    inject: ['DATA_SOURCE'],
  },
];
