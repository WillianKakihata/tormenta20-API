import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 100})
    name: string;

    @Column({type: 'varchar', length: 100})
    username: string;

    @Column({type: 'varchar', length: 100})
    email: string;

    @Column({type: 'varchar', length: 100})
    password: string;


}