package com.fai.brofee_fe.service;

import com.fai.brofee_fe.dto.ServiceDTO_hung;
import com.fai.brofee_fe.dto.ServiceDetailDTO_hung;
import com.fai.brofee_fe.repository.ServiceRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ServiceService_hung {

    private final ServiceRepository serviceRepository;
    private final ModelMapper modelMapper;

    public List<ServiceDetailDTO_hung> getAllServices() {
        List<com.fai.brofee_fe.entity.Service> services = serviceRepository.findAll();
        services.forEach(com.fai.brofee_fe.entity.Service::getPolicyAssignments);
        return services
                .stream()
                .map(service -> modelMapper.map(service, ServiceDetailDTO_hung.class))
                .toList();
    }
}
