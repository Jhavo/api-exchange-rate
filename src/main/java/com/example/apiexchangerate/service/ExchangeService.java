package com.example.apiexchangerate.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.example.apiexchangerate.model.ExchangeRate;

import reactor.core.publisher.Mono;

@Service
public class ExchangeService implements IExchangeService {

    @Autowired
    private WebClient webClient;

    @Value("${app.api.exchangeUri}")
    private String exchangeApiUri;

    public Mono<ExchangeRate> getConversionRate(String baseCode, String targetCode) {
        String uri = this.exchangeApiUri + "/{baseCode}/{targetCode}";
        return webClient.get()
                .uri(uri, baseCode, targetCode)
                .retrieve()
                .onStatus(httpStatus -> HttpStatus.NOT_FOUND.equals(httpStatus),
                        clientResponse -> Mono.empty())
                .bodyToMono(ExchangeRate.class);
    }

}
