package com.uni.ead_project.service;

import com.uni.ead_project.entity.CouponsEntity;

import java.util.List;
import java.util.Optional;

public interface ICouponsService {
    List<CouponsEntity> getAllCoupon();
    Optional<CouponsEntity> getAllCouponById(String couponId);
    void saveCoupon(CouponsEntity couponsEntity);
    void deleteCoupon(String couponId);
}
