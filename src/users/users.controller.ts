import { Body, ClassSerializerInterceptor, Controller, Get, Param, ParseIntPipe, Post, Put, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { ProfilesService } from 'src/profiles/profiles.service';
import { Roles } from 'src/shared/decorators/role.decorator';
import { RoleGuard } from 'src/shared/guards/role.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';


@Controller('/users')
export class UsersController {

    constructor(
        private usersService: UsersService) { }

    @Post()
    public async create(@Body() createDto: CreateUserDto){

        return this.usersService.create(createDto);
    }

    @Roles('user')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Put(':id')
    public async updateUserName(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateUserDto){

        return this.usersService.updateUserName(id, updateDto);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get(':id')
    public async getById(@Param('id', ParseIntPipe) id: number){

        return this.usersService.getById(id);
    }

 }
