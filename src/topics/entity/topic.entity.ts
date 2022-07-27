import { Exclude } from 'class-transformer';
import { Subcategory } from 'src/subcategory/entity/subcategory.entity';
import { User } from 'src/users/entitys/user.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Status } from './../../status/entity/status.entity';

@Entity('topic')
export class Topic {
  
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255})
    title: string;

    @Column()
    date: Date;

    @Column("longtext")
    description: string

    @ManyToOne(() => Status)
    status?: Status;

    @Column()
    @Exclude()
    statusId: number

    @ManyToOne(() => User)
    user?: User

    @Column()
    @Exclude()
    userId: number

    @ManyToMany(() => Subcategory)
    @JoinTable()
    subcategorys: Subcategory[]
}