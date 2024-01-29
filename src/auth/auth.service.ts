import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { User } from '../user/entity';
import { LoginRequestDto } from './dto';

@Injectable()
export class AuthService {
    
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async login(loginRequestDto: LoginRequestDto): Promise<string> {
        const user: User = await this.validateUser(loginRequestDto.email, loginRequestDto.password);

        const payload = {
            sub: user.id,
            email: user.email,
            password: user.password
        };

        return await this.jwtService.signAsync(payload);
    }

    async validateUser(email: string, password: string): Promise<User> {
        const user: User = await this.userService.findOneByEmail(email);
        const passwordValid = await bcrypt.compareSync(password, user.password)
        if (!passwordValid) throw new UnauthorizedException('Invalid password');
        return user;
    }

}
