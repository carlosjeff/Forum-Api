import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Pattern } from "../../shared/models/pattern";

@Entity('role')
export class Role extends Pattern { }