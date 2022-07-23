
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Role } from 'src/shared/decorators/role.decorator';
import { RoleGuard } from 'src/shared/guards/role.guard';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RolesService } from './roles.service';

@Controller('/roles')
export class RolesController {

    constructor(private roleService: RolesService) {    }


    
    @UseGuards(JwtAuthGuard)
    @Post()
    public async create(@Body() createDto: CreateRoleDto){
        
        return this.roleService.create(createDto);
    }
    
    @Role('admin')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Get('/all')
    public async getAll(){
        console.log('getAll');
        return this.roleService.getAll();
    }

    @Get('/:id')
    public async getById(@Param('id', ParseIntPipe) id: number){

        return this.roleService.getById(id);
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
