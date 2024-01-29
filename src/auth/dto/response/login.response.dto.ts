import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {

    @ApiProperty()
    readonly accessToken: string;

}