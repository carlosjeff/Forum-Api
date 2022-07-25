import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class UpdateReplyTopicDto {
   
    @IsNotEmpty()
    @IsString()
    reply: string;   
}