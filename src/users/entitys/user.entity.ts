import { Exclude, Expose } from "class-transformer";
import { isDate, IsEmail } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "../../profiles/entitys/profile.entity";
import { Role } from "../../roles/entitys/role.entity";

@Entity('user')
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    userName:string;

    @Column({length: 255})
    email: string;

    @Column({length: 255})
    @Exclude()
    password: string;
    
    @Column()
    @Exclude()
    data: Date

    @Column()
    @Exclude()
    roleId: number;

    @ManyToOne(() => Role)
    role?: Role;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;

}