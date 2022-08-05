import { ArrayContains, ArrayNotEmpty, IsEmpty, IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateTopicDto {
  

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string

    @IsInt()
    @IsNotEmpty()
    statusId: number   

    @IsEmpty()
    userId?: number

    @ArrayNotEmpty()
    subcategorys: number[];
}