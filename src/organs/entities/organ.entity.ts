import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Organ {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    status: string;

    @ManyToOne(() => User, (user) => user.donatedOrgans)
    donor: User;

    @ManyToOne(() => User, (user) => user.receivedOrgans)
    client: User;
}