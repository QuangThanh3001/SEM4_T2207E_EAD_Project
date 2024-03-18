package com.fai.brofee_fe.dto;

import com.fai.brofee_fe.entity.Service;
import com.fai.brofee_fe.entity.Transaction;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class TransactionServiceDTO {

    private Long id;

    private ServiceDTO_hung service;

    private BigDecimal price;

}
