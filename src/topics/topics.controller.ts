import { UsersService } from './../users/users.service';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { CreateTopicDto } from './dto/create-topic.dto';
import { CreateRoleDto } from './../roles/dto/create-role.dto';
import { TopicsService } from './topics.service';
import { Body, Controller, Get, Param, Post, ParseIntPipe, Put, Delete, UseGuards, Req } from '@nestjs/common';
import { Roles } from 'src/shared/decorators/role.decorator';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RoleGuard } from 'src/shared/guards/role.guard';
import { Request } from 'express';

@Controller('topics')
export class TopicsController {

    constructor(private topicsService: TopicsService, private usersService: UsersService) {
        
    }

    @Roles('user')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Post()
    public async create(@Body() createDto: CreateTopicDto, @Req() req: any) { 
        
        return  this.usersService.getByEmail(req.user.email).
                    then(user => this.topicsService.create({...createDto, userId: user.id}));
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
