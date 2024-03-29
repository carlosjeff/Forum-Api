import { Color } from './entity/color.entity';
import { ColorsController } from './colors.controller';
import { ColorsService } from './colors.service';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Color])],
    controllers: [
        ColorsController,],
    providers: [
        ColorsService,],
})
export class ColorsModule { }
