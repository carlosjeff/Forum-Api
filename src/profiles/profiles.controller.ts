import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';


@Controller('profiles')
export class ProfilesController {

    constructor(private profileService: ProfilesService) { }

    @Get(':id')
    public async getById(@Param('id', ParseIntPipe) id: number){

        return this.profileService.getById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    public async update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateProfileDto){

        return this.profileService.update(id, updateDto);
    }
}
