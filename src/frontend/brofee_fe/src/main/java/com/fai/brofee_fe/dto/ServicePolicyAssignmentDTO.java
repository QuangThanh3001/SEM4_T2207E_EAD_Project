package com.fai.brofee_fe.dto;

import com.fai.brofee_fe.entity.CommissionPolicy;
import com.fai.brofee_fe.entity.Service;
import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ServicePolicyAssignmentDTO {

    private Long id;

    private ServiceDTO_hung service;

    private Boolean active;

}
