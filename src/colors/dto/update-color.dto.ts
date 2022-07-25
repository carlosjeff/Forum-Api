import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class UpdateColorDto {
 
    @IsString()
    @MaxLength(100)
    @IsNotEmpty()
    name: string;
}