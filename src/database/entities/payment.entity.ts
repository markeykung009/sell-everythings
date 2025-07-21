import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./order.entity";

export @Entity()
class PaymentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => OrderEntity)
  @JoinColumn()
  order: OrderEntity;

  @Column()
  paymentMethod: string; // eg. 'credit_card', 'cod', 'bank_transfer'

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column()
  paymentStatus: 'pending' | 'completed' | 'failed';
}