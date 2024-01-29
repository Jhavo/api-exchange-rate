import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import "dotenv/config";
import { UserService } from 'src/user/user.service';
import { User } from '../user/entity';
import { LoginRequestDto } from './dto';

@Injectable()
export class AuthService {
    
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async validateUser(email: string, password: string): Promise<User> {
        const user: User = await this.userService.findByEmail(email);
        const passwordValid = await bcrypt.compare(password, user.password)
        if (!passwordValid) throw new UnauthorizedException('Invalid password');
        return user;
    }

    async login(loginRequestDto: LoginRequestDto): Promise<string> {
        const user: User = await this.userService.findByEmail(loginRequestDto.email);

        const payload = {
            sub: user.id,
            email: user.email
        };

        const jwtSignOptions: JwtSignOptions = {
            secret: process.env.JWT_SECRET,
            expiresIn: process.env.ACCESS_TOKEN_EXPIRATION_TIME
        };

        return this.jwtService.sign(payload, jwtSignOptions);
    }

}
