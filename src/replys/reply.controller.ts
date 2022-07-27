import { UpdateReplyDto } from './dto/update-reply.dto';
import { CreateReplyDto } from './dto/create-reply.dto';
import { ReplyService } from './reply.service';
import { Body, Controller, Get, Param, Post, ParseIntPipe, Put, Delete } from '@nestjs/common';

@Controller('replys')
export class ReplyController { 

    constructor(private replysService: ReplyService) {
        
    }

    @Post()
    public async create(@Body() createDto: CreateReplyDto) { 
        
        return this.replysService.create(createDto); 
    }

    @Get()
    public async getAll() { 
        
        return this.replysService.getAll(); 
    }

    @Get(':id')
    public async getById(@Param('id', ParseIntPipe) id: number) { 
        
        return this.replysService.getById(id); 
    }

    @Put(':id')
    public async update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateReplyDto) { 
        
        return this.replysService.update(id, updateDto); 
    }

    @Delete(':id')
    public async delete(@Param('id', ParseIntPipe) id: number) { 
        
        return this.replysService.delete(id); 
    }

}
