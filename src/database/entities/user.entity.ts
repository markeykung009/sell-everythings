import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export @Entity()
class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ type: 'enum', enum: ['customer', 'admin'], default: 'customer' })
  role: 'customer' | 'admin';
}