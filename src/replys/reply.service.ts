import { UpdateReplyDto } from './dto/update-reply.dto';
import { CreateReplyDto } from './dto/create-reply.dto';
import { Repository } from 'typeorm/repository/Repository';
import { Reply } from 'src/replys/entity/reply.entity';
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReplyService {

    constructor(@InjectRepository(Reply) private replysRepository: Repository<Reply>) {
        
    }

    public async create(createDto: CreateReplyDto) { 
        
        return this.replysRepository.save({date: new Date(), ...createDto}); 
    }

    public async getAll() { 
        
        return this.replysRepository.find(); 
    }

    public async getById(id: number) { 
        
        return this.replysRepository.findOne({where: {id}}); 
    }

    public async update(id: number, updateDto: UpdateReplyDto) { 
        
        const reply = await this.getById(id);

        if(!reply) throw new NotFoundException(`Id ${id} não encontrado`);

        await this.replysRepository.update({id}, updateDto);

        return {...reply, ...updateDto} as Reply; 
    }

    public async delete(id: number) { 
        
        if(!this.getById(id)) throw new NotFoundException(`Id ${id} não encontrado`);
        
        await this.replysRepository.delete(id)

        return `O registro com o id ${id} foi deletada com sucesso!`; ; 
    }

 }
