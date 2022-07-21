import { IsString, MaxLength, MinLength } from "class-validator";



export class CreateRoleDto{

    @IsString()
    @MaxLength(100)
    @MinLength(1)
    name: string;
}