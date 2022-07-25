import { IsInt, IsOptional, IsString, MaxLength } from "class-validator";

export class UpdateCategoryDto {
   
    @IsOptional()
    @IsString()
    @MaxLength(100)
    name?: string;

    @IsOptional()
    @IsInt()
    colorId?: number;
   
}

