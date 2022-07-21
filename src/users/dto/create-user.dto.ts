import { CreateProfileDto } from './../../profiles/dto/create-profile.dto';
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, min, MinLength } from "class-validator";
import { User } from '../entitys/user.entity';

export class CreateUserDto{

    @IsString()
    @MaxLength(100)
    @IsNotEmpty()
    userName:string;

    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    password: string;

    @IsOptional()
    @IsInt()
    role?: number;

    @IsString()
    @MaxLength(100)
    @IsNotEmpty()
    name: string;


    
}