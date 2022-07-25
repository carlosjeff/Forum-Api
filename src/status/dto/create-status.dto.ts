import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateStatusDto {
  
    @IsString()
    @MaxLength(100)
    @IsNotEmpty()
    name: string
   
}