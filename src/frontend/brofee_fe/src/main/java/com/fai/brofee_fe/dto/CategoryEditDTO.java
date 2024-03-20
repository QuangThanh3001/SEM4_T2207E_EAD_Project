package com.fai.brofee_fe.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class CategoryEditDTO {
    private Long id;

    @NotBlank(message = "Category name must not be blank")
    private String name;

    private String old_icon;

    private MultipartFile new_icon;
}