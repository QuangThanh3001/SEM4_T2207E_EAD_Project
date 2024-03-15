package com.fai.brofee_fe.repository;

import com.fai.brofee_fe.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
