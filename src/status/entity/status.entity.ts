import { Entity } from 'typeorm';
import { Pattern } from './../../shared/models/pattern';

@Entity('status')
export class Status extends Pattern { }