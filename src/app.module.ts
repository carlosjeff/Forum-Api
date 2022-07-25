import { ReplyTopic } from './reply-topics/entity/reaply-topic.entity';
import { ReplyTopicsModule } from './reply-topics/reply-topics.module';
import { Topic } from './topics/entity/topic.entity';
import { TopicsModule } from './topics/topics.module';
import { Status } from './status/entity/status.entity';
import { StatusModule } from './status/status.module';
import { Subcategory } from './subcategory/entity/subcategory.entity';
import { SubcategorysModule } from './subcategory/subcategorys.module';
import { CategorysModule } from './categorys/categorys.module';
import { CategorysService } from './categorys/categorys.service';
import { Category } from './categorys/entity/category.entity';
import { Color } from './colors/entity/color.entity';
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
    ReplyTopicsModule,
    TopicsModule,
    StatusModule,
    SubcategorysModule,
    CategorysModule,
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
        User,
        Color,
        Category,
        Subcategory,
        Status,
        Topic,
        ReplyTopic
      ],
      synchronize: true,
    }),
  ]
})
export class AppModule { }
