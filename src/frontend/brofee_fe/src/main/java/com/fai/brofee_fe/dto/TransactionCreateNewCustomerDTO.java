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
public class TransactionCreateNewCustomerDTO {

    @NotBlank(message = "Phone is mandatory")
    @Size(max = 20, message = "Phone number must be lest than 255 characters")
    private String phone;

    @NotBlank(message = "Name is mandatory")
    @Size(max = 225, message = "First name must be lest than 255 characters")
    private String name;

    @Email
    @Size(max = 225, message = "Email must be lest than 255 characters")
    private String email;

    private String address;

    private String codeOrPhone;

    @NotEmpty(message = "Please select at least 1 service")
    private List<Long> services;
}
