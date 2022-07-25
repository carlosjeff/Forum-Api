import { UpdateStatusDto } from './dto/update-status.dto';
import { CreateStatusDto } from './dto/create-status.dto';
import { Repository } from 'typeorm/repository/Repository';
import { Status } from './entity/status.entity';
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StatusService {

    constructor(@InjectRepository(Status) private statusRepository: Repository<Status>) {
        
    }

    public async create(createDto: CreateStatusDto) { 
        
        return await this.statusRepository.save(createDto); 
    }

    public async getAll() { 
        
        return await this.statusRepository.find(); 
    }

    public async getById(id: number) { 
        
        return await this.statusRepository.findOneBy({id}); 
    }

    public async update(id: number, updateDto: UpdateStatusDto) { 
        
        if(!this.getById(id)) throw new NotFoundException(`Id ${id} não encontrado`);

        await this.statusRepository.update({id}, updateDto);

        return {id, ...updateDto}; 
    }

    public async delete(id: number) { 
        
        if(!this.getById(id)) throw new NotFoundException(`Id ${id} não encontrado`);

        await this.statusRepository.delete(id)

        return `O registro com o id ${id} foi deletada com sucesso!`;
    }

  

 }
