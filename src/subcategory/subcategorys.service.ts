import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { Repository } from 'typeorm/repository/Repository';
import { Subcategory } from './entity/subcategory.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';

@Injectable()
export class SubcategorysService {

    constructor(@InjectRepository(Subcategory) private subcategoryRepository: Repository<Subcategory>) { }

    public async create(createDto: CreateSubcategoryDto) { 

        return this.subcategoryRepository.save(createDto); 
    }

    public async getAll() { 

        return await this.subcategoryRepository.find(); 
    }

    public async getById(id: number) { 

        return await this.subcategoryRepository.findOneBy({id}); 
    }

    public async update(id: number, updateDto: UpdateSubcategoryDto) { 

        if(!this.getById(id)) throw new NotFoundException(`Id ${id} não encontrado`);

        return await this.subcategoryRepository.update({id}, updateDto); 
    }

    public async delete(id: number) { 

        if(!this.getById(id)) throw new NotFoundException(`Id ${id} não encontrado`);

        await this.subcategoryRepository.delete(id);

        return `O registro com o id ${id} foi deletada com sucesso!`;
    }
}
