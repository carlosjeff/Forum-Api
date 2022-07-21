import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';


@Controller()
export class ProfilesController {

    constructor(private profileService: ProfilesService) { }

    @Get(':id')
    public async getById(@Param('id', ParseIntPipe) id: number){

        return this.profileService.getById(id);
    }

    @Put(':id')
    public async update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateProfileDto){

        return this.profileService.update(id, updateDto);
    }
}
