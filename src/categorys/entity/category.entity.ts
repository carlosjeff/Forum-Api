import { Exclude } from 'class-transformer';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Color } from './../../colors/entity/color.entity';
import { Pattern } from './../../shared/models/pattern';

@Entity('category')
export class Category extends Pattern {
  
    @Column()
    @Exclude()
    colorId: number

    @ManyToOne(() => Color)
    color?: Color
   
}