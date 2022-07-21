
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RolesService } from './roles.service';

@Controller('/roles')
export class RolesController {

    constructor(private roleService: RolesService) {    }

    @Post()
    public async create(@Body() createDto: CreateRoleDto){

        return this.roleService.create(createDto);
    }

    @Get(':id')
    public async getById(@Param('id', ParseIntPipe) id: number){

        return this.roleService.getById(id);
    }

    @Get()
    public async getAll(){
        return this.roleService.getAll();
    }

    
    @Put(':id')
    public async update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateRoleDto){

        return this.roleService.update(id, updateDto);
    }
    
    @Delete(':id')
    public async Delete(@Param('id', ParseIntPipe) id: number){

        return this.roleService.delete(id);
    }
}
