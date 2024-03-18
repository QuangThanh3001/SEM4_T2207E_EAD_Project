package com.fai.brofee_fe.repository;

import com.fai.brofee_fe.entity.Service;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ServiceRepository extends JpaRepository<Service, Long> {

    List<Service> findByIdIn(List<Long> ids);

}
