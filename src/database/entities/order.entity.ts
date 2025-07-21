import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { OrderItemEntity } from "./order-item.entity";

export @Entity()
class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @OneToMany(() => OrderItemEntity, item => item.order, { cascade: true })
  items: OrderItemEntity[];

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;

  @Column()
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';

  @Column()
  createdAt: Date;
}