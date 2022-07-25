import { UpdateTopicDto } from './dto/update-topic.dto';
import { CreateTopicDto } from './dto/create-topic.dto';
import { Repository } from 'typeorm/repository/Repository';
import { Topic } from './entity/topic.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TopicsService { 

    constructor(@InjectRepository(Topic) private topicsRepository: Repository<Topic>) {
        
    }

    public async create(createDto: CreateTopicDto) { 
        
        return this.topicsRepository.save({...createDto, date: new Date() }); 
    }
    public async getAll() { 
        
        return this.topicsRepository.find({relations:{
            status: true,
            user: true
        }}); 
    }
    public async getById(id: number) { 
        
        return this.topicsRepository.findOne({where: {id}, relations: {
            status: true,
            user: true
        }}); 
    }
    public async update(id: number, updateDto: UpdateTopicDto) { 

        const topic = await this.getById(id);
        
        if(!topic) throw new NotFoundException(`Id ${id} não encontrado`);

        await this.topicsRepository.update({id}, updateDto)
        
        return {...topic, ...updateDto} as Topic ; 
    }
    public async delete(id: number) { 
        
        if(!this.getById(id)) throw new NotFoundException(`Id ${id} não encontrado`);

        await this.topicsRepository.delete(id);

        return `O registro com o id ${id} foi deletada com sucesso!`;
    }
    
}
