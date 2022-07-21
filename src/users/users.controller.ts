/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { ProfilesService } from 'src/profiles/profiles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';


@Controller('/users')
export class UsersController {

    constructor(
        private usersService: UsersService,
       
        ) {
        
    }

    @Post()
    public async create(@Body() createDto: CreateUserDto){

        return this.usersService.create(createDto);
    }


 }
