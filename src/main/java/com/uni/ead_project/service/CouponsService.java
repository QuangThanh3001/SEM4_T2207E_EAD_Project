package com.uni.ead_project.service;

import com.uni.ead_project.entity.CouponsEntity;
import com.uni.ead_project.repository.CouponsRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CouponsService implements ICouponsService{
    private final CouponsRepository couponsRepository;

    public CouponsService(CouponsRepository couponsRepository) {
        this.couponsRepository = couponsRepository;
    }

    @Override
    public List<CouponsEntity> getAllCoupon() {
        return couponsRepository.findAll();
    }

    @Override
    public Optional<CouponsEntity> getAllCouponById(String couponId) {
        return couponsRepository.findById(couponId);
    }

    @Override
    public void saveCoupon(CouponsEntity couponsEntity) {
        couponsRepository.save(couponsEntity);
    }

    @Override
    public void deleteCoupon(String couponId) {
        couponsRepository.deleteById(couponId);
    }
}
