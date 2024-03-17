package com.fai.brofee_fe.dto;

import com.fai.brofee_fe.entity.Category;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
public class ServiceDTO_hung {

    private Long id;

    private String name;

    private String thumbnail;

    private String description;

    private BigDecimal basePrice;

    private BigDecimal discount;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

}
