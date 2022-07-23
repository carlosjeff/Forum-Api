import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Color } from './entity/color.entity';

@Injectable()
export class ColorsService { 

    constructor(@InjectRepository(Color) private colorsRepository: Repository<Color>) { }


}
