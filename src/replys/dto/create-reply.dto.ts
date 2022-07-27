import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateReplyDto {
   
    @IsNotEmpty()
    @IsString()
    reply: string;


    @IsNotEmpty()
    @IsInt()
    userId: number;

    @IsNotEmpty()
    @IsInt()
    replyTopicId: number;
   
}