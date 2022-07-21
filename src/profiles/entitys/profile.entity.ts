import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('profile')
export class Profile{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255})
    name: string;

    @Column()
    birthDate: Date;

    @Column("longtext")
    linkedIn: string;

    @Column("longtext")
    github: string;

    @Column("longtext")
    site: string;

    @Column({length: 255})
    alternativeEmail: string;

    @Column("longtext")
    aboutMe: string;
}