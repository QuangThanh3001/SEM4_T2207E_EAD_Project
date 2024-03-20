package com.fai.brofee_fe.dto;

import com.fai.brofee_fe.entity.CommissionPolicy;
import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CommissionTierCreateDTO {

    @NotNull(message = "Level is required")
    @Min(value = 1, message = "Level must be greater than 0")
    @Max(value = 10, message = "Level must be less than or equal to 10")
    private Integer level;

    @NotNull(message = "Commission rate is mandatory")
    @DecimalMin(value = "0.00", message = "Commission rate must be non-negative")
    @DecimalMax(value = "100.00", message = "Commission rate must be less than or equal to 100.00")
    private BigDecimal commissionRate;

}
