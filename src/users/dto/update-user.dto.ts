import { IsEmail, IsInt, IsNotEmpty, IsString, MaxLength, min, MinLength } from "class-validator";

export class UpdateUserDto{

    @IsString()
    @MaxLength(100)
    @IsNotEmpty()
    userName:string;
}

export class UpdateUserPasswordDto{

    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    password: string;

    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    confirmPassword: string;
}

