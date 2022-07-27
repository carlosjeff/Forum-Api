import { Reply } from 'src/replys/entity/reply.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReplyService } from './reply.service';
import { ReplyController } from './reply.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [TypeOrmModule.forFeature([Reply])],
    controllers: [ReplyController],
    providers: [ReplyService],
})
export class ReplysModule { }
