import { ColorsModule } from './colors/colors.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { RolesModule } from './roles/roles.module';
import { RolesService } from './roles/roles.service';
import { UsersController } from './users/users.controller';
import { RolesController } from './roles/roles.controller';
import { ProfilesModule } from './profiles/profiles.module';
import { ProfilesController } from './profiles/profiles.controller';
import { Profile } from './profiles/entitys/profile.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './roles/entitys/role.entity';
import { User } from './users/entitys/user.entity';

@Module({
  imports: [
    ColorsModule,
    AuthModule,
    UsersModule,
    RolesModule,
    ProfilesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Cjb@2015',
      database: 'forum_api',
      entities: [
        Profile,
        Role,
        User
      ],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
