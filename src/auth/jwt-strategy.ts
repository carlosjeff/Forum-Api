import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "./constants";


export class JwtStrategy extends PassportStrategy(Strategy){
    
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret
        });
    }

    public async validate(payload: any){
        console.log('jwt', payload);
        
        return { id: payload.sub, email: payload.email, role: payload.role }
    }
}