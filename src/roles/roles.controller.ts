import { Payload } from './../shared/models/payload';

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, Req } from '@nestjs/common';
import { Roles } from 'src/shared/decorators/role.decorator';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RoleGuard } from 'src/shared/guards/role.guard';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RolesService } from './roles.service';
import { Request } from 'express';

@Controller('/roles')
export class RolesController {

    constructor(private roleService: RolesService) {    }


    
    @Roles('admin')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Post()
    public async create(@Body() createDto: CreateRoleDto){
        
        return this.roleService.create(createDto);
    }
    
    @Roles('admin')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Get('/all')
    public async getAll(@Req() req: Request){
        return this.roleService.getAll();
    }
    @Roles('user')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Get('/:id')
    public async getById(@Param('id', ParseIntPipe) id: number){

        return this.roleService.getById(id);
    }

    @Roles('user')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Put(':id')
    public async update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateRoleDto){

        return this.roleService.update(id, updateDto);
    }
    
    @Roles('user')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Delete(':id')
    public async Delete(@Param('id', ParseIntPipe) id: number){

        return this.roleService.delete(id);
    }
}
