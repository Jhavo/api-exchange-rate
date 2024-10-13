package com.example.apiexchangerate.service;

import com.example.apiexchangerate.model.ExchangeRate;

import reactor.core.publisher.Mono;

public interface IExchangeService {

    Mono<ExchangeRate> getConversionRate(String baseCode, String targetCode);

}
