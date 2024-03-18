package com.fai.brofee_fe.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class TransactionCreateOldCustomerDTO {

    @Size(max = 20, message = "Phone number must be lest than 255 characters")
    private String phone;

    @NotEmpty(message = "Please select at least 1 service")
    private List<Long> services;
}
