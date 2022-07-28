import { ColorsService } from './colors.service';
import { CreateColorDto } from './dto/create-color.dto';
import { Controller, Get, Param, Post, ParseIntPipe, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RoleGuard } from 'src/shared/guards/role.guard';
import { Roles } from 'src/shared/decorators/role.decorator';


@Controller('colors')
export class ColorsController {

    constructor(private colorsServices: ColorsService) {}

    @Roles('admin')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Post()
    public async create(@Body() createDto: CreateColorDto) {
       
       return this.colorsServices.create(createDto);
    }

    @Get()
    public async getAll() {
       
       return this.colorsServices.getAll();
    }

    @Get(':id')
    public async getById(@Param('id', ParseIntPipe) id: number) {
       
       return this.colorsServices.getById(id);
    }
 }
