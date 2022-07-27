import { UpdateReplyTopicDto } from './dto/update-reply-topic.dto';
import { CreateReplyTopicDto } from './dto/create-reply-topic.dto';
import { Repository } from 'typeorm/repository/Repository';
import { ReplyTopic } from './entity/reaply-topic.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReplyTopicsService {

    constructor(@InjectRepository(ReplyTopic) private replyTopicsRepository: Repository<ReplyTopic>) {
        
    }

    public async create(createDto: CreateReplyTopicDto) { 
        
        return this.replyTopicsRepository.save(createDto); 
    }

    public async getAll() { 
        
        return this.replyTopicsRepository.find({relations: {
            topic: true,
            user: true
        }}); 
    }

    public async getById(id: number) { 
        
        return this.replyTopicsRepository.findOne({where: {id}, relations: {
            topic: true,
            user: true
        }}); 
    }

    public async update(id: number, updateDto: UpdateReplyTopicDto) { 
        
        const replyTopic = await this.getById(id);

        if(!replyTopic) throw new NotFoundException(`Id ${id} não encontrado`);

        await this.replyTopicsRepository.update({id}, updateDto);

        return {...replyTopic, ...updateDto} as ReplyTopic; 
    }

    public async delete(id: number) {
        
        if(!this.getById(id)) throw new NotFoundException(`Id ${id} não encontrado`);

        await this.replyTopicsRepository.delete(id)
        
        return `O registro com o id ${id} foi deletada com sucesso!`; 
    }

 }
