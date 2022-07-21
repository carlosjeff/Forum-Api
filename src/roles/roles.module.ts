import { Role } from './entitys/role.entity';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Role])],
    controllers: [RolesController],
    providers: [RolesService],
    exports: [RolesService]
})
export class RolesModule { }
