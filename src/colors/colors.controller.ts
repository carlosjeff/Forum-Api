import { ColorsService } from './colors.service';
import { CreateColorDto } from './dto/create-color.dto';
import { Controller, Get, Param, Post, ParseIntPipe, Body } from '@nestjs/common';

@Controller('colors')
export class ColorsController {

    constructor(private colorsServices: ColorsService) {}


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
