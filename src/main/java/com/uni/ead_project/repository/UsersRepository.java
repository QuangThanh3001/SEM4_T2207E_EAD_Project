package com.uni.ead_project.repository;

import com.uni.ead_project.entity.UsersEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepository extends JpaRepository <UsersEntity, String> {

}
