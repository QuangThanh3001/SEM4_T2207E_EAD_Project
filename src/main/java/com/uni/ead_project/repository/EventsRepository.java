package com.uni.ead_project.repository;

import com.uni.ead_project.entity.EventsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventsRepository extends JpaRepository<EventsEntity,String> {
}
