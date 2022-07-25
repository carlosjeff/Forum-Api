import { Topic } from './entity/topic.entity';
import { TopicsController } from './topics.controller';
import { TopicsService } from './topics.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Topic])],
    controllers: [
        TopicsController
    ],
    providers: [
        TopicsService,],
})
export class TopicsModule { }
