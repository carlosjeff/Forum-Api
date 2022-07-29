import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Repository } from 'typeorm/repository/Repository';
import { Category } from './entity/category.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategorysService {

    constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {}

    public async create(createDto: CreateCategoryDto) {
       
       return await this.categoryRepository.save(createDto);
    }

    public async getAll() {
       
       return await this.categoryRepository.find({
         relations: {
            subcategorys: true,
            color: true
         }
       });
    }

    public async getById(id: number) {
       
       return await this.categoryRepository.findOneBy({id}); 
    }

    public async update(id:number, updateDto: UpdateCategoryDto) {
       
        if(!this.getById(id)) throw new NotFoundException(`Id ${id} não encontrado`);

        await this.categoryRepository.update({id}, updateDto)

       return {id, ...updateDto} as Category;
    }

    public async delete(id: number) {

        if(!this.getById(id)) throw new NotFoundException(`Id ${id} não encontrado`);

        await this.categoryRepository.delete(id)

        return `O registro com o id ${id} foi deletada com sucesso!`;
    }
}
