package com.example.apiexchangerate.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public class ExchangeRate {

    @JsonProperty("result")
    private String result;

    @JsonProperty("documentation")
    @JsonIgnore
    private String documentation;

    @JsonProperty("terms_of_use")
    @JsonIgnore
    private String termsOfUse;

    @JsonProperty("time_last_update_unix")
    @JsonIgnore
    private int timeLastUpdateUnix;

    @JsonProperty("time_last_update_utc")
    @JsonIgnore
    private Date timeLastUpdateUtc;

    @JsonProperty("time_next_update_unix")
    @JsonIgnore
    private int timeNextUpdateUnix;

    @JsonProperty("time_next_update_utc")
    @JsonIgnore
    private Date timeNextUpdateUtc;

    @JsonProperty("base_code")
    private String baseCode;

    @JsonProperty("target_code")
    private String targetCode;

    @JsonProperty("conversion_rate")
    private double conversionRate;

}
