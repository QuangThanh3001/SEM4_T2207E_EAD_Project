package com.fai.brofee_fe.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PolicyServiceAssignmentDTO {

    private Long id;

    private PolicyShortDTO policy;

    private Boolean active;

}
