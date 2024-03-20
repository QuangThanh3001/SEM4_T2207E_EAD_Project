package com.fai.brofee_fe.service;

import com.fai.brofee_fe.dto.CommissionPolicyCreateDTO;
import com.fai.brofee_fe.dto.CommissionPolicyDTO;
import com.fai.brofee_fe.dto.CommissionTierDTO;
import com.fai.brofee_fe.dto.PolicyStatus;
import com.fai.brofee_fe.entity.CommissionPolicy;
import com.fai.brofee_fe.entity.CommissionTier;
import com.fai.brofee_fe.entity.ServicePolicyAssignment;
import com.fai.brofee_fe.repository.CommissionPolicyRepository;
import com.fai.brofee_fe.repository.ServicePolicyAssignmentRepository;
import com.fai.brofee_fe.repository.ServiceRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CommissionPolicyService {

    private final CommissionPolicyRepository commissionPolicyRepository;
    private final ServiceRepository serviceRepository;
    private final ServicePolicyAssignmentRepository servicePolicyAssignmentRepository;
    private final ModelMapper modelMapper;

    public Page<CommissionPolicyDTO> getCommissionPolicies(Pageable pageable) {
        Page<CommissionPolicy> commissionPolicies = commissionPolicyRepository.findAll(pageable);
        List<CommissionPolicyDTO> policyDTOList = commissionPolicies
                .stream()
                .map(commissionPolicy -> modelMapper.map(commissionPolicy, CommissionPolicyDTO.class))
                .toList();
        LocalDateTime now = LocalDateTime.now();
        policyDTOList.forEach(policyDTO -> {
            policyDTO.setTotalRate(policyDTO.getCommissionTiers().stream().map(CommissionTierDTO::getCommissionRate).reduce(BigDecimal.ZERO, BigDecimal::add));

            if (policyDTO.getEndDate() != null && policyDTO.getEndDate().isBefore(now)) {
                policyDTO.setStatus(PolicyStatus.EXPIRED);
            } else if (policyDTO.getStartDate().isAfter(now)) {
                policyDTO.setStatus(PolicyStatus.PENDING);
            } else {
                policyDTO.setStatus(PolicyStatus.ACTIVE);
            }

        });
        return new PageImpl<>(policyDTOList, pageable, commissionPolicies.getTotalElements());
    }

    @Transactional
    public void createCommissionPolicy(CommissionPolicyCreateDTO createDTO) {
        // 1 - Crate new policy
        CommissionPolicy commissionPolicy = CommissionPolicy.builder()
                .code(generatePolicyCode(createDTO))
                .startDate(createDTO.getStartDate())
                .endDate(createDTO.getEndDate())
                .maxReferralLevels(createDTO.getMaxReferralLevels())
                .commissionTiers(createDTO.getCommissionTiers().stream().map(tierDTO -> modelMapper.map(tierDTO, CommissionTier.class)).toList())
                .build();
        commissionPolicyRepository.save(commissionPolicy);

        // 2 - Assign policy to services
        List<com.fai.brofee_fe.entity.Service> services = serviceRepository.findAllById(createDTO.getServiceIds());
        List<ServicePolicyAssignment> servicePolicyAssignments = services.stream()
                .map(service -> ServicePolicyAssignment.builder().service(service).policy(commissionPolicy).build())
                .toList();
        servicePolicyAssignmentRepository.saveAll(servicePolicyAssignments);
    }

    private String generatePolicyCode(CommissionPolicyCreateDTO createDTO) {
        String prefix = "PLV-";
        String maxLevels = String.format("%02d", createDTO.getMaxReferralLevels()); // Pad with zeros to 2 digits
        String monthYear = DateTimeFormatter.ofPattern("MMyy").format(createDTO.getStartDate());
        String randomSuffix = UUID.randomUUID().toString().substring(0, 8);

        return prefix + maxLevels + "-" + monthYear + "-" + randomSuffix;
    }
}
