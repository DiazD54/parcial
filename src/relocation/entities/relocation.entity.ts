import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Relocation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    location: string;

    @Column()
    risks: string;

    @ManyToOne(() => User, (user) => user.relocations)
    user: User;

    @Column()
    dateRequested: Date;

    @Column()
    status: string;

    @Column()
    clientId: number;

}