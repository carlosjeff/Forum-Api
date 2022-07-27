import { Exclude } from 'class-transformer';
import { ReplyTopic } from 'src/reply-topics/entity/reaply-topic.entity';
import { User } from 'src/users/entitys/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reply')
export class Reply {
 
    @PrimaryGeneratedColumn()
    id: number;

    @Column("longtext")
    reply: string;

    @Column()
    date: Date;

    @Column()
    @Exclude()
    userId: number

    @ManyToOne(() => User)
    user: User;

    @Column()
    @Exclude()
    replyTopicId: number;

    @ManyToOne(() => ReplyTopic, (replyTopic) => replyTopic.replys)
    replyTopic: ReplyTopic


   
}