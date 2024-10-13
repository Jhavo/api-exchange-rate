package com.example.apiexchangerate.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.apiexchangerate.model.ExchangeRate;
import com.example.apiexchangerate.service.IExchangeService;

import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/exchange-rate")
public class ExchangeController {

    @Autowired
    private IExchangeService service;

    @GetMapping(value = "/{baseCode}/{targetCode}")
    public Mono<ExchangeRate> getConversionRate(@PathVariable String baseCode,
            @PathVariable String targetCode) {
        return service.getConversionRate(baseCode, targetCode);
    }

}

// htaype@bcp.com.pe