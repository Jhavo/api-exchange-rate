import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateRequestDto } from './dto/request';
import { ExchangeRate } from './entity';

@Injectable()
export class ExchangeRateService {

    constructor(
        @InjectRepository(ExchangeRate)
        private readonly exchangeRateRepository: Repository<ExchangeRate>
    ) {}

    async findByOriginAndDestinationCurrency(originCurrency: string, destinationCurrency: string): Promise<ExchangeRate> {
        const exchangeRate: ExchangeRate = await this.exchangeRateRepository.findOne({
            where: {
                originCurrency: originCurrency,
                destinationCurrency: destinationCurrency,
                active: true
            }
        });

        if (!exchangeRate) {
            throw new NotFoundException(`Exchange rate not found`);
        }

        return exchangeRate;
    }

    async update(updateRequestDto: UpdateRequestDto): Promise<ExchangeRate> {
        const exchangeRate: ExchangeRate = await this.findByOriginAndDestinationCurrency(updateRequestDto.originCurrency, updateRequestDto.destinationCurrency);
        Object.assign(exchangeRate, updateRequestDto);
        return await this.exchangeRateRepository.save(exchangeRate);
    }

}
