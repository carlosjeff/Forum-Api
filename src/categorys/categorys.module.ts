import { Category } from './entity/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorysController } from './categorys.controller';
import { CategorysService } from './categorys.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    controllers: [
        CategorysController,],
    providers: [CategorysService],
})
export class CategorysModule { }
