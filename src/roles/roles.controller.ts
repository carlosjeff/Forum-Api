
import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
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

        return this.roleService.getById(id)
    }

}
