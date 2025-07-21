import { UserEntity } from './user.entity';
import { ProductEntity } from './product.entity';
import { OrderEntity } from './order.entity';
import { CategoryEntity } from './category.entity';
import { CartItemEntity } from './cart.entity';
import { OrderItemEntity } from './order-item.entity';
import { PaymentEntity } from './payment.entity';
import { AddressEntity } from './shipping-address.entity'

export const entities = [
  UserEntity,
  ProductEntity,
  OrderEntity,
  CategoryEntity,
  CartItemEntity,
  OrderItemEntity,
  PaymentEntity,
  AddressEntity
];