import { ProfilesService } from './profiles.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ProfilesController } from './profiles.controller';

@Module({
    imports: [],
    controllers: [ProfilesController],
    providers: [
        ProfilesService,],
})
export class ProfilesModule { }
