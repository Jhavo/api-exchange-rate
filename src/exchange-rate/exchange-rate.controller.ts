import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard';
import { CalculateRequestDto, CalculateResponseDto, UpdateRequestDto } from './dto';
import { ExchangeRate } from './entity';
import { ExchangeRateService } from './exchange-rate.service';

@UseGuards(JwtAuthGuard)
@Controller('exchange-rate')
@ApiTags('exchange-rate')
@ApiBearerAuth()
export class ExchangeRateController {

  constructor(private readonly exchangeRateService: ExchangeRateService) {}

  @Post('calculate')
  @ApiOkResponse({ type: CalculateResponseDto })
  async calculate(@Body() calculateRequestDto: CalculateRequestDto): Promise<CalculateResponseDto> {
    const exchangeRate: ExchangeRate = await this.exchangeRateService.findByOriginAndDestinationCurrency(calculateRequestDto.originCurrency, calculateRequestDto.destinationCurrency);
    const convertedAmount = calculateRequestDto.amount * exchangeRate.rate;

    return {
      ...calculateRequestDto,
      rate: exchangeRate.rate,
      convertedAmount: convertedAmount
    }
  }

  @Post('update')
  @ApiOkResponse({ type: ExchangeRate })
  async update(@Body() updateRequestDto: UpdateRequestDto): Promise<ExchangeRate> {
    return this.exchangeRateService.update(updateRequestDto);
  }

}
