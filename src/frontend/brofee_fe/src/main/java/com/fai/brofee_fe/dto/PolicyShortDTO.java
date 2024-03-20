package com.fai.brofee_fe.dto;

import com.fai.brofee_fe.entity.ServicePolicyAssignment;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;


@Getter
@Setter
public class PolicyShortDTO {

    private Long id;

    private String code;

    private LocalDateTime startDate;

    private LocalDateTime endDate;

    private Integer maxReferralLevels;

}
