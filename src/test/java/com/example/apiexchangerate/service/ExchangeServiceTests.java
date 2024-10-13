package com.example.apiexchangerate.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.web.reactive.WebFluxTest;
import org.springframework.test.web.reactive.server.WebTestClient;

import com.example.apiexchangerate.model.ExchangeRate;

@WebFluxTest(ExchangeService.class)
public class ExchangeServiceTests {

    @Autowired
    private WebTestClient webTestClient;

    @Value("${app.api.exchangeUri}")
    private String exchangeApiUri;

    @Test
    public void getConversionRateTest() {
        String uri = "https://v6.exchangerate-api.com/v6/1227cf5d13731ad6c251bc00/pair/EUR/PEN";
        webTestClient.get().uri(uri)
                .exchange()
                .expectBody(ExchangeRate.class);
    }

}
