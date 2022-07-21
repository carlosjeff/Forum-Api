import { User } from './entitys/user.entity';
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateUserDto } from './dto/create-user.dto';
import { ProfilesService } from 'src/profiles/profiles.service';
import { Profile } from 'src/profiles/entitys/profile.entity';
import * as bcrypt from 'bcrypt';

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
