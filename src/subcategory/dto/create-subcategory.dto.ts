import { IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateSubcategoryDto {
 
    @IsString()
    @MaxLength(100)
    @IsNotEmpty()
    name: string;

    @IsInt()
    @IsNotEmpty()
    categoryId: number;
   
}