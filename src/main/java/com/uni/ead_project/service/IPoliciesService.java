package com.uni.ead_project.service;

import com.uni.ead_project.entity.PoliciesEntity;

import java.util.List;
import java.util.Optional;

public interface IPoliciesService {
    List<PoliciesEntity> getAllPolicies();
    Optional<PoliciesEntity>getAllPoliciesById(String serviceId);
    void saveserviceId(PoliciesEntity policiesEntity);
    void deleteserviceId(String serviceId);
}
