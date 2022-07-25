import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class UpdateTopicDto {
  

    @IsOptional()
    @IsString()
    @MaxLength(255)
    title: string;

    @IsOptional()
    @IsString()
    description: string

    @IsInt()
    @IsNotEmpty()
    statusId: number   
}