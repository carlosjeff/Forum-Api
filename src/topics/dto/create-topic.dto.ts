import { IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";

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

    @IsInt()
    @IsNotEmpty()
    userId: number
}