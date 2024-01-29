import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import "dotenv/config";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/user/entity';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    
    constructor(
        private readonly authService: AuthService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET,
        });
    }

    async validate(email: string, password: string): Promise<User> {
        const user: User = await this.authService.validateUser(email, password);
        
        if (!user) {
            throw new UnauthorizedException('hayrol 2');
        }
        
        return user;
    }

}
