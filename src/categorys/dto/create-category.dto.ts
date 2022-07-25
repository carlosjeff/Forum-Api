import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateCategoryDto {
  
    @IsString()
    @MaxLength(100)
    @IsNotEmpty()
    name: string;
   
  
    @IsInt()
    @IsNotEmpty()
    colorId: number;
}