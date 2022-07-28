import { UpdateStatusDto } from './dto/update-status.dto';
import { CreateStatusDto } from './dto/create-status.dto';
import { StatusService } from './status.service';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post, Put, ParseIntPipe, UseGuards } from '@nestjs/common';
import { Status } from './entity/status.entity';
import { Roles } from 'src/shared/decorators/role.decorator';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RoleGuard } from 'src/shared/guards/role.guard';

@Controller()
export class StatusController {

    constructor(private statusService: StatusService) {
        
    }

    @Roles('admin')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Post()
    public async create(@Body() createDto: CreateStatusDto): Promise<Status> { 
        
        return this.statusService.create(createDto); 
    }

    @Get()
    public async getAll(): Promise<Status[]> { 
        
        return this.statusService.getAll(); 
    }

    @Get(':id')
    public async getById(@Param('id', ParseIntPipe) id: number): Promise<Status> { 
        
        return this.statusService.getById(id); 
    }

    @Roles('admin')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Put(':id')
    public async update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateStatusDto): Promise<Status> { 
        
        return this.statusService.update(id, updateDto); 
    }

    @Roles('admin')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Delete(':id')
    public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> { 
        
        return this.statusService.delete(id); 
    }
 }
