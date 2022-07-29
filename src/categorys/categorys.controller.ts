import { Category } from './entity/category.entity';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategorysService } from './categorys.service';
import { Body, Controller, Get, Param, Post, ParseIntPipe, Put, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RoleGuard } from 'src/shared/guards/role.guard';
import { Roles } from 'src/shared/decorators/role.decorator';


@Controller('categorys')
export class CategorysController {

    constructor(private categorysService: CategorysService) { }

    @Roles('admin')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Post()
    public async create(@Body() createDto: CreateCategoryDto): Promise<Category> {
       
       return this.categorysService.create(createDto);
    }

    @Get('all')
    public async getAll(): Promise<Category[]> {
       
       return this.categorysService.getAll();
    }

    @Get(':id')
    public async getById(@Param('id', ParseIntPipe) id: number): Promise<Category> {
       
       return this.categorysService.getById(id);
    }

    @Roles('admin')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Put(':id')
    public async update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateCategoryDto): Promise<Category> {
       
       return this.categorysService.update(id, updateDto);
    }

    @Roles('admin')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Delete(':id')
    public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
       
       return this.categorysService.delete(id);
    }
 }
