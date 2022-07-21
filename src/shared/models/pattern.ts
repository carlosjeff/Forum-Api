import { Column, PrimaryGeneratedColumn } from "typeorm";


export class Pattern{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string;
}