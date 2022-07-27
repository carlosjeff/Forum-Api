import { Category } from './entity/category.entity';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategorysService } from './categorys.service';
import { Body, Controller, Get, Param, Post, ParseIntPipe, Put, Delete } from '@nestjs/common';

@Controller('categorys')
export class CategorysController {

    constructor(private categorysService: CategorysService) { }


    @Post()
    public async create(@Body() createDto: CreateCategoryDto): Promise<Category> {
       
       return this.categorysService.create(createDto);
    }

    @Get()
    public async getAll(): Promise<Category[]> {
       
       return this.categorysService.getAll();
    }

    @Get(':id')
    public async getById(@Param('id', ParseIntPipe) id: number): Promise<Category> {
       
       return this.categorysService.getById(id);
    }

    @Put(':id')
    public async update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateCategoryDto): Promise<Category> {
       
       return this.categorysService.update(id, updateDto);
    }

    @Delete(':id')
    public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
       
       return this.categorysService.delete(id);
    }
 }
