import { IsDate, IsEmail, IsFQDN, IsString, MaxDate, MaxLength, MinLength } from 'class-validator'

export class CreateProfileDto{

    @IsString()
    @MaxLength(255)
    @MinLength(2)
    name: string;

    @IsDate()
    @MaxDate(new Date())
    birthDate?: Date;

    @IsString()
    @IsFQDN()
    linkedIn?: string;

    @IsString()
    @IsFQDN()
    github?: string;

    @IsString()
    @IsFQDN()
    site?: string;

    @IsEmail()
    alternativeEmail?: string;

    @IsString()
    aboutMe?: string;
}