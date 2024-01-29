import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginRequestDto, LoginResponseDto } from './dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  @ApiOkResponse({ type: LoginResponseDto })
  async login(@Body() loginRequestDto: LoginRequestDto): Promise<LoginResponseDto> {
    const accessToken = await this.authService.login(loginRequestDto);
    return { accessToken };
  }

}
