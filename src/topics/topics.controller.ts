import { UpdateTopicDto } from './dto/update-topic.dto';
import { CreateTopicDto } from './dto/create-topic.dto';
import { CreateRoleDto } from './../roles/dto/create-role.dto';
import { TopicsService } from './topics.service';
import { Body, Controller, Get, Param, Post, ParseIntPipe, Put, Delete } from '@nestjs/common';

@Controller('topics')
export class TopicsController {

    constructor(private topicsService: TopicsService) {
        
    }

    @Post()
    public async create(@Body() createDto: CreateTopicDto) { 
        
        return this.topicsService.create(createDto); 
    }

    @Get()
    public async getAll() { 
        
        return this.topicsService.getAll(); 
    }

    @Get(':id')
    public async getById(@Param('id', ParseIntPipe) id: number) { 
        
        return this.topicsService.getById(id); 
    }

    @Put(':id')
    public async update(@Param('id', ParseIntPipe)id: number, @Body() updateDto: UpdateTopicDto) { 
        
        return this.topicsService.update(id, updateDto); 
    }

    @Delete(':id')
    public async delete(@Param('id', ParseIntPipe) id: number) { 
        
        return this.topicsService.delete(id); 
    }


 }
