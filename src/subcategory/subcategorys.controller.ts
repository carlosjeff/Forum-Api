import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { SubcategorysService } from './subcategorys.service';
import { Body, Controller, Get, Param, Post, ParseIntPipe, Put, Delete } from '@nestjs/common';

@Controller('subcategory')
export class SubcategorysController {

    constructor(private subcagorysService: SubcategorysService) { }

    @Post()
    public async create(@Body() createDto: CreateSubcategoryDto) { 
        
        return this.subcagorysService.create(createDto); 
    }

    @Get()
    public async getAll() { 
        
        return this.subcagorysService.getAll(); 
    }

    @Get(':id')
    public async getById(@Param('id', ParseIntPipe) id: number) {
        
        return this.subcagorysService.getById(id); 
    }

    @Put(':id')
    public async update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateSubcategoryDto) { 
        
        return this.subcagorysService.update(id, updateDto); 
    }

    @Delete(':id')
    public async delete(@Param('id', ParseIntPipe) id: number) { 
        
        return this.subcagorysService.delete(id); 
    }

 }
