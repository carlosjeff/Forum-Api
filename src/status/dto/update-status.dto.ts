import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class UpdateStatusDto {
  
    @IsString()
    @MaxLength(100)
    @IsNotEmpty()
    name: string
   
}