import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('User')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;
}
