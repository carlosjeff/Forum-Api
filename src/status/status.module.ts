import { Status } from './entity/status.entity';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Status])],
    controllers: [
        StatusController,],
    providers: [
        StatusService,],
})
export class StatusModule { }
