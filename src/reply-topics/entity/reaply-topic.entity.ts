import { Topic } from './../../topics/entity/topic.entity';
import { User } from 'src/users/entitys/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('reply-topic')
export class ReplyTopic {
 
    @PrimaryGeneratedColumn()
    id: number

    @Column("longtext")
    reply: string;

    @Column()
    date: Date;
    
    @ManyToOne(() => User)
    user?: User

    @Column()
    @Exclude()
    userId: number;

    @ManyToOne(() =>Topic)
    topic?: Topic;

    @Column()
    @Exclude()
    topicId: number;
   
}