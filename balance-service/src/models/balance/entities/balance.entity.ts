import { Entity, CreateDateColumn, UpdateDateColumn, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('balances')
export class Balance {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @CreateDateColumn({
    name: 'created_at',
    default: () =>  'CURRENT_TIMESTAMP(6)'
  })
  createdAt?: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    default: () =>  'CURRENT_TIMESTAMP(6)',
    onUpdate:  'CURRENT_TIMESTAMP(6)'
  })
  updatedAt?: Date;

  @Column({
    name: 'account_id',
    unique: true
  })
  accountId: string;

  @Column({
    name: 'balance',
    type: 'decimal'
  })
  balance: number;
}
