import { Topic } from './../../topics/entity/topic.entity';
import { User } from 'src/users/entitys/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Reply } from 'src/replys/entity/reply.entity';

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


    @OneToMany(() => Reply, (reply) => reply.replyTopic)
    replys : Reply[]
   
}