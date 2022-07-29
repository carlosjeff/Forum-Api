import { Subcategory } from './../../subcategory/entity/subcategory.entity';
import { Exclude } from 'class-transformer';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Color } from './../../colors/entity/color.entity';
import { Pattern } from './../../shared/models/pattern';

@Entity('category')
export class Category extends Pattern {
  
    @Column()
    @Exclude()
    colorId: number

    @ManyToOne(() => Color)
    color?: Color

    @OneToMany(() => Subcategory, (subcategory) => subcategory.category)
    subcategorys: Subcategory[]
   
}