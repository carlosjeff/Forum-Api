import { Body, Controller, Get, Param, Post, ParseIntPipe, Put, Delete } from '@nestjs/common';
import { CreateReplyTopicDto } from './dto/create-reply-topic.dto';
import { UpdateReplyTopicDto } from './dto/update-reply-topic.dto';
import { ReplyTopicsService } from './reply-topics.service';

@Controller('replyTopics')
export class ReplyTopicsController {

    constructor(private replyTopicsService: ReplyTopicsService) { }

    @Post()
    public async create(@Body() createDto: CreateReplyTopicDto) { 
        
        return this.replyTopicsService.create(createDto); 
    }

    @Get()
    public async getAll() { 
        
        return this.replyTopicsService.getAll(); 
    }

    @Get(':id')
    public async getById(@Param('id', ParseIntPipe) id: number) { 
        
        return this.replyTopicsService.getById(id); 
    }

    @Put(':id')
    public async update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateReplyTopicDto) { 
        
        return this.replyTopicsService.update(id, updateDto); 
    }

    @Delete(':id')
    public async delete(@Param('id', ParseIntPipe) id: number) { 
        
        return this.replyTopicsService.delete(id); 
    }
}
