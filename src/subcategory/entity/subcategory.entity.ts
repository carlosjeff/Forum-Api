import { Exclude } from 'class-transformer';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Category } from './../../categorys/entity/category.entity';
import { Pattern } from './../../shared/models/pattern';

@Entity('subcategory')
export class Subcategory extends Pattern {

    @Column()
    @Exclude()
    categoryId: number
   
    @ManyToOne(() => Category, (category) => category.subcategorys)
    category?: Category
   
}