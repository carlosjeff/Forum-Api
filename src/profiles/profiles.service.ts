import { CreateProfileDto } from './dto/create-profile.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Profile } from './entitys/profile.entity';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService { 

    constructor(@InjectRepository(Profile) private profilesRepository: Repository<Profile>) { }


    public async create(createDto: CreateProfileDto): Promise<Profile> {
        
        return await this.profilesRepository.save(createDto);
    }

    public async update(id: number, updateDto: UpdateProfileDto): Promise<Profile> {
        
        if(!this.getById(id)) throw new NotFoundException(`Id ${id} não encontrado`);

        await this.profilesRepository.update({ id }, updateDto);

        return {id, ...updateDto} as Profile;
    }

    public async getById(id: number): Promise<Profile> {

        return await this.profilesRepository.findOne( { where: {id} } );
    }

    public async delete(id: number) {

        if(!this.getById(id)) throw new NotFoundException(`Id ${id} não encontrado`);

        await this.profilesRepository.delete(id)

        return `O registro com o id ${id} foi deletada com sucesso!`;
    }

    
}
