import { IsString, MaxLength, MinLength } from "class-validator";

export class UpdateRoleDto{

    @IsString()
    @MaxLength(100)
    @MinLength(1)
    name: string;
}