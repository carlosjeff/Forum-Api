import { CreateColorDto } from './dto/create-color.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Color } from './entity/color.entity';

@Injectable()
export class ColorsService { 

    constructor(@InjectRepository(Color) private colorsRepository: Repository<Color>) {}


    public async create(createDto: CreateColorDto) {
       
       return await this.colorsRepository.save(createDto);
    }

    public async getAll() {
       
       return await this.colorsRepository.find();
    }

    public async getById(id: number) {
       
       return await this.colorsRepository.findOneBy({id});
    }



}
