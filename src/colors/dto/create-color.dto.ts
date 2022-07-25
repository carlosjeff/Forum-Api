import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateColorDto {
   
    @IsString()
    @MaxLength(100)
    @IsNotEmpty()
    name: string;
   
}