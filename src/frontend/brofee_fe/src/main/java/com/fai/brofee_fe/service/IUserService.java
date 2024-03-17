package com.fai.brofee_fe.service;

import com.fai.brofee_fe.dto.UserCreateDTO;
import com.fai.brofee_fe.entity.User;

import java.util.Optional;

public interface IUserService {

    void createUser(UserCreateDTO userCreateDTO);

    Optional<User> getUserByCodeOrPhone(String codeOrPhone);

}
