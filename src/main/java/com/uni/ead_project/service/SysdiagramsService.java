package com.uni.ead_project.service;

import com.uni.ead_project.entity.SysdiagramsEntity;
import com.uni.ead_project.repository.SysdiagramsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SysdiagramsService implements ISysdiagramsService{
    private final SysdiagramsRepository sysdiagramsRepository;

    public SysdiagramsService(SysdiagramsRepository sysdiagramsRepository) {
        this.sysdiagramsRepository = sysdiagramsRepository;
    }

    @Override
    public List<SysdiagramsEntity> getAllSysdiagrams() {
        return sysdiagramsRepository.findAll();
    }
}
