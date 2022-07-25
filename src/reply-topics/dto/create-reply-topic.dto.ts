import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateReplyTopicDto {
   
    @IsNotEmpty()
    @IsString()
    reply: string;

    @IsInt()
    @IsNotEmpty()
    userId: number

    @IsInt()
    @IsNotEmpty()
    topicId: number;
   
}