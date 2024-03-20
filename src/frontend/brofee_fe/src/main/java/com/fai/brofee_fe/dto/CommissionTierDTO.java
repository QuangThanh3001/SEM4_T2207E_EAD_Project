package com.fai.brofee_fe.dto;

import com.fai.brofee_fe.entity.CommissionPolicy;
import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class CommissionTierDTO {

    private Long id;

    private Integer level;

    private BigDecimal commissionRate;

}
