import { Profile } from './entitys/profile.entity';
import { ProfilesService } from './profiles.service';
import { Module } from '@nestjs/common';
import { ProfilesController } from './profiles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Profile])],
    controllers: [ProfilesController],
    providers: [
        ProfilesService,],
    exports: [ProfilesService]
})
export class ProfilesModule { }
