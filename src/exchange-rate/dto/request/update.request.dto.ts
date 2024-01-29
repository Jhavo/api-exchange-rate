import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal, IsNotEmpty, IsPositive, IsString } from "class-validator";

export class UpdateRequestDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    originCurrency: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    destinationCurrency: string;

    @IsNotEmpty()
    @IsDecimal()
    @IsPositive()
    @ApiProperty()
    rate: number;

}
