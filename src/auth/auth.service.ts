
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { Payload } from 'src/shared/models/payload';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService,
                private jwtService: JwtService) { }

    
    public async validateUser(userEmail: string, UserPassword: string){

        const user = await this.usersService.getByEmail(userEmail);
        if(!user) return null;

        const isMatch = await bcrypt.compare(UserPassword, user.password)

        if(isMatch){
            const payload: Payload = {
                sub: user.userName,
                email: user.email, 
                role: user.role.name
            }
            
            return payload;
        }

        return null;
    }

    public async login(payload: any){

        return { access_token: this.jwtService.sign(payload)}
    }
 }
