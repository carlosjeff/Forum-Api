import { UpdateTopicDto } from './dto/update-topic.dto';
import { CreateTopicDto } from './dto/create-topic.dto';
import { CreateRoleDto } from './../roles/dto/create-role.dto';
import { TopicsService } from './topics.service';
import { Body, Controller, Get, Param, Post, ParseIntPipe, Put, Delete, UseGuards } from '@nestjs/common';
import { Roles } from 'src/shared/decorators/role.decorator';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RoleGuard } from 'src/shared/guards/role.guard';

@Controller('topics')
export class TopicsController {

    constructor(private topicsService: TopicsService) {
        
    }

    @Roles('user')
    @UseGuards(JwtAuthGuard,RoleGuard)
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

    @Roles('user')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Put(':id')
    public async update(@Param('id', ParseIntPipe)id: number, @Body() updateDto: UpdateTopicDto) { 
        
        return this.topicsService.update(id, updateDto); 
    }
    
    @Roles('user')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Delete(':id')
    public async delete(@Param('id', ParseIntPipe) id: number) { 
        
        return this.topicsService.delete(id); 
    }


 }
