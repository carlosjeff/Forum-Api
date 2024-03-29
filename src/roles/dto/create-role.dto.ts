import { IsNotEmpty, IsString, MaxLength } from "class-validator";



export class CreateRoleDto{

    @IsString()
    @MaxLength(100)
    @IsNotEmpty()
    name: string;
}