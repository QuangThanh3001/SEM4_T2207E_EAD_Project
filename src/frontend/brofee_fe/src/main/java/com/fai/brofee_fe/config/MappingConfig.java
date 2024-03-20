package com.fai.brofee_fe.config;

import com.fai.brofee_fe.dto.CommissionTierDTO;
import com.fai.brofee_fe.entity.CommissionTier;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MappingConfig {

    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();

        // Create custom mappings here
        modelMapper.createTypeMap(CommissionTierDTO.class, CommissionTier.class)
                .addMappings(mapper -> mapper.skip(CommissionTier::setId));

        return modelMapper;
    }
}
