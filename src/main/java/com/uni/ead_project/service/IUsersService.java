package com.uni.ead_project.service;

import com.uni.ead_project.entity.UsersEntity;

import java.util.List;
import java.util.Optional;

public interface IUsersService {
    List<UsersEntity>getAllUsers();
    Optional<UsersEntity>getUserById(String userId);
    void saveFormUser(UsersEntity usersEntity);
    void deleteUser(String userId);
}
