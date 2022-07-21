import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entitys/role.entity';

@Injectable()
export class RolesService {

    constructor(
        @InjectRepository(Role) private rolesRepository: Repository<Role>
    ) { }


    public async create(createDto: CreateRoleDto): Promise<Role> {
        
        return await this.rolesRepository.save(createDto);
    }

    public async update(id: number, updateDto: UpdateRoleDto): Promise<Role> {
        
        if(!this.isExist(id)) throw new NotFoundException(`Id ${id} não encontrado`);

        await this.rolesRepository.update({ id }, updateDto);

        return {id, ...updateDto} as Role;
    }

    public async getById(id: number): Promise<Role> {

        const role = await this.isExist(id);

        if(!role) throw new NotFoundException(`Id ${id} não encontrado`);

        return role
    }

    public async getAll() {
        return await this.rolesRepository.find();
    }

    public async Delete(id: number) {

        if(!this.isExist(id)) throw new NotFoundException(`Id ${id} não encontrado`);

        await this.rolesRepository.delete(id)

        return `O registro com o id ${id} foi deletada com sucesso!`;
    }
    
    private async isExist(id: number){

        return await this.rolesRepository.findOne( { where: {id} } );
    }
}
