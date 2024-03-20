package com.fai.brofee_fe.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class CategoryCreateDTO {

    private Long id;

    @NotBlank(message = "Category name must not be blank")
    private String name;

    private MultipartFile icon;

}