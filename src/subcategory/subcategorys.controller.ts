import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { SubcategorysService } from './subcategorys.service';
import { Body, Controller, Get, Param, Post, ParseIntPipe, Put, Delete, UseGuards } from '@nestjs/common';
import { Roles } from 'src/shared/decorators/role.decorator';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RoleGuard } from 'src/shared/guards/role.guard';

@Controller('subcategorys')
export class SubcategorysController {

    constructor(private subcagorysService: SubcategorysService) { }

    @Roles('admin')
    @UseGuards(JwtAuthGuard,RoleGuard)
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

    @Roles('admin')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Put(':id')
    public async update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateSubcategoryDto) { 
        
        return this.subcagorysService.update(id, updateDto); 
    }

    @Roles('admin')
    @UseGuards(JwtAuthGuard,RoleGuard)
    @Delete(':id')
    public async delete(@Param('id', ParseIntPipe) id: number) { 
        
        return this.subcagorysService.delete(id); 
    }

 }
