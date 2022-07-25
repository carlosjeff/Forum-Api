import { UpdateStatusDto } from './dto/update-status.dto';
import { CreateStatusDto } from './dto/create-status.dto';
import { StatusService } from './status.service';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post, Put, ParseIntPipe } from '@nestjs/common';
import { Status } from './entity/status.entity';

@Controller()
export class StatusController {

    constructor(private statusService: StatusService) {
        
    }

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

    @Put(':id')
    public async update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateStatusDto): Promise<Status> { 
        
        return this.statusService.update(id, updateDto); 
    }

    @Delete(':id')
    public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> { 
        
        return this.statusService.delete(id); 
    }
 }
