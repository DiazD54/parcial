import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Relocation } from '../../relocation/entities/relocation.entity';
import { Organ } from '../../organs/entities/organ.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  role: 'client' | 'provider';

  @OneToMany(() => Relocation, (relocation) => relocation.user)
  relocations: Relocation[];

  @OneToMany(() => Organ, (organ) => organ.donor)
  donatedOrgans: Organ[];

  @OneToMany(() => Organ, (organ) => organ.client)
  purchasedOrgans: Organ[];
  receivedOrgans: any;
}
