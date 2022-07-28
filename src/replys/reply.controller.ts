import { UpdateReplyDto } from './dto/update-reply.dto';
import { CreateReplyDto } from './dto/create-reply.dto';
import { ReplyService } from './reply.service';
import { Body, Controller, Get, Param, Post, ParseIntPipe, Put, Delete, UseGuards } from '@nestjs/common';
import { Roles } from 'src/shared/decorators/role.decorator';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RoleGuard } from 'src/shared/guards/role.guard';

@Controller('replys')
export class ReplyController { 

    constructor(private replysService: ReplyService) {
        
    }

    @Roles('user')
    @UseGuards(JwtAuthGuard,RoleGuard)
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

    @Roles('user')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Put(':id')
    public async update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateReplyDto) { 
        
        return this.replysService.update(id, updateDto); 
    }

    @Roles('user')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Delete(':id')
    public async delete(@Param('id', ParseIntPipe) id: number) { 
        
        return this.replysService.delete(id); 
    }

}
