import { Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity()
export class Credential{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    username: string;

    
    @Column()
    password: string;  

   @OneToOne(() => User, user => user.credential)
   user:User;
}