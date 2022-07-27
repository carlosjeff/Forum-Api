import { IsNotEmpty, IsString } from "class-validator";

export class UpdateReplyDto {
   
    @IsNotEmpty()
    @IsString()
    reply: string;

}