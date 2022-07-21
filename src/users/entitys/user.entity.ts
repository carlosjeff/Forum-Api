import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "../../profiles/entitys/profile.entity";
import { Role } from "../../roles/entitys/role.entity";

@Entity('user')
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255})
    userName:string;

    @Column({length: 255})
    email: string;

    @Column({length: 255})
    password: string;
    
    @Column()
    data: Date

    @ManyToOne(() => Role)
    role: Role;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;


}