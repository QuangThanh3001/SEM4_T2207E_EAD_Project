package com.uni.ead_project.service;

import com.uni.ead_project.entity.UsersEntity;
import com.uni.ead_project.repository.UsersRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUsersService{
    private final UsersRepository usersRepository;

    public UserService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @Override
    public List<UsersEntity> getAllUsers() {
        return usersRepository.findAll();
    }

    @Override
    public Optional<UsersEntity> getUserById(String userId) {
        return usersRepository.findById(userId);
    }

    @Override
    public void saveFormUser(UsersEntity usersEntity) {
        usersRepository.save(usersEntity);
    }

    @Override
    public void deleteUser(String userId) {
        usersRepository.deleteById(userId);
    }
}
