import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDecimal, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CalculateRequestDto {

    @IsNotEmpty()
    @IsDecimal()
    @IsPositive()
    @ApiProperty()
    amount: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    originCurrency: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    destinationCurrency: string;

}
