import { User } from './entitys/user.entity';
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateUserDto } from './dto/create-user.dto';
import { ProfilesService } from 'src/profiles/profiles.service';
import { Profile } from 'src/profiles/entitys/profile.entity';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService { 

    constructor(@InjectRepository(User) private usersRepository: Repository<User>,
    private profilesService: ProfilesService) { }


    public async create(createDto: CreateUserDto){       
       return await this.profilesService
            .create({name: createDto.name})
            .then(profile => this.createUserObj(createDto, profile))
            .then(user => this.usersRepository.save(user));               
    }

    public async updateUserName(id: number, updateDto: UpdateUserDto){

        const user = await this.getById(id);

        if(!user) throw new NotFoundException(`Id ${id} não encontrado`);

        await this.usersRepository.update({ id }, updateDto);

        return {id,...user, ...updateDto};
    }

    public async getById(id: number){
          
        return await this.usersRepository.findOne( { where: {id}, relations: { profile: true } } );
    }

    public async getByEmail(email: string){
        
        return this.usersRepository.findOne({where: {email},relations: { role: true }});
    }

    private  createUserObj(createDto: CreateUserDto, profile: Profile){
        
        return this.hashing(createDto.password).then(password =>{
            return {
                userName: createDto.userName,
                email: createDto. email,
                password: password,
                data: new Date(),
                roleId: createDto.role ? createDto.role : 2,
                profile: profile
            } as User
        })
    }

    private async hashing(password: string){
        const saltOrRounds = await bcrypt.genSalt();;
        const hash = await bcrypt.hash(password, saltOrRounds);
        return hash;
    }
}
