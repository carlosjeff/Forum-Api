import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('profile')
export class Profile{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255})
    name: string;

    @Column({nullable: true})
    birthDate: Date;

    @Column("longtext",{nullable: true})
    linkedIn: string;

    @Column("longtext",{nullable: true})
    github: string;

    @Column("longtext",{nullable: true})
    site: string;

    @Column({length: 255,nullable: true})
    alternativeEmail: string;

    @Column("longtext",{nullable: true})
    aboutMe: string;
}