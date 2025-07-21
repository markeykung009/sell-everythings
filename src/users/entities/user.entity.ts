import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
 
    @Column({ type: 'int', nullable: false, default: 0 })
    age: number;

    @Column({ unique: true })
    email: string;
}
