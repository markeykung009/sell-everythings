import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {ProductEntity} from "./product.entity"

export @Entity()
class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => ProductEntity, product => product.category)
  products: ProductEntity[];
}