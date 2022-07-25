import { IsInt, IsOptional, IsString, MaxLength } from "class-validator";

export class UpdateSubcategoryDto {
   
    @IsOptional()
    @IsString()
    @MaxLength(100)
    name?: string;

    @IsOptional()
    @IsInt()
    categoryId?: number;
   
}