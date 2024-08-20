import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";



@Entity()
export class Appointment{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    time: string;

    @Column()
    userId: number;

    @Column({
        default: "active",
    }) 
    status: string;

    @Column("text")
    description: string;

    @ManyToOne(() => User, (user) => user.appointments)
    user: User;
}