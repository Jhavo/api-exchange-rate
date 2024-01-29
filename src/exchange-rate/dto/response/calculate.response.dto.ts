import { ApiProperty } from "@nestjs/swagger";

export class CalculateResponseDto {

    @ApiProperty()
    amount: number;

    @ApiProperty()
    originCurrency: string;

    @ApiProperty()
    destinationCurrency: string;

    @ApiProperty()
	rate: number;

    @ApiProperty()
	convertedAmount: number;

}
