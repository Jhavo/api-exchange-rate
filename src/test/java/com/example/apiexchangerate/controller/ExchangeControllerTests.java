package com.example.apiexchangerate.controller;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.reactive.WebFluxTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.example.apiexchangerate.model.ExchangeRate;
import com.example.apiexchangerate.service.ExchangeService;

import reactor.core.publisher.Mono;

@WebFluxTest(ExchangeController.class)
class ExchangeControllerTests {

    @MockBean
    private ExchangeService exchangeService;

    @Test
    public void getConversionRateTest() {
        Mono<ExchangeRate> exchangeRateMono = Mono.just(new ExchangeRate());
        when(exchangeService.getConversionRate(anyString(), anyString())).thenReturn(exchangeRateMono);
    }

}
