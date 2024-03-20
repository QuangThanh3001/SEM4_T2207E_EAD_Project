package com.uni.ead_project.service;

import com.uni.ead_project.entity.PartnersEntity;

import java.util.List;
import java.util.Optional;

public interface IPartnersService {
    List<PartnersEntity> getAllPartner();
    Optional<PartnersEntity> getAllPartnerById(String userId);
    void savePartner(PartnersEntity partnersEntity);
    void deletePartner(String userId);
}
