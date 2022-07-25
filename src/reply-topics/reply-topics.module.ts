import { ReplyTopic } from './entity/reaply-topic.entity';
import { ReplyTopicsService } from './reply-topics.service';
import { ReplyTopicsController } from './reply-topics.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ReplyTopic])],
    controllers: [
        ReplyTopicsController,],
    providers: [
        ReplyTopicsService,],
})
export class ReplyTopicsModule { }
