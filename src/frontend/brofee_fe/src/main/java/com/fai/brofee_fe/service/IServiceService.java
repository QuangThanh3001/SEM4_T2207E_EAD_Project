package com.fai.brofee_fe.service;

import com.fai.brofee_fe.dto.ServiceCreateDTO;
import com.fai.brofee_fe.dto.ServiceDTO;
import com.fai.brofee_fe.dto.ServiceEditDTO;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface IServiceService {

    List<ServiceDTO> getAllServices();

    Page<ServiceDTO> getServicePage(int page, int size, Long CategoryId, String search);

    Optional<ServiceDTO> getServiceById (Long id);

    Optional<ServiceEditDTO> getServiceEditById (Long id);

    void createNewService(ServiceCreateDTO serviceCreateDTO);

    void updateService(Long id, ServiceEditDTO serviceEditDTO);

    void deleteService(Long id);
}
