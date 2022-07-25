import { Subcategory } from './entity/subcategory.entity';
import { SubcategorysController } from './subcategorys.controller';
import { SubcategorysService } from './subcategorys.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Subcategory])],
    controllers: [
        SubcategorysController,],
    providers: [
        SubcategorysService,],
})
export class SubcategorysModule { }
