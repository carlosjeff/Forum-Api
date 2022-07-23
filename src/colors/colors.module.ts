import { ColorsController } from './colors.controller';
import { ColorsService } from './colors.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        ColorsController,],
    providers: [
        ColorsService,],
})
export class ColorsModule { }
