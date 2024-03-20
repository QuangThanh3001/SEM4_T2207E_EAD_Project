package com.fai.brofee_fe.controller;

import com.fai.brofee_fe.dto.CategoryCreateDTO;
import com.fai.brofee_fe.dto.CategoryDTO;
import com.fai.brofee_fe.service.CategoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;
    @GetMapping("")
    public String getCategoryPage(
            Model model,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "6") int size,
            @RequestParam(defaultValue = "all") String item
    )
    {
        Page<CategoryDTO> categoryDTOPage = categoryService.getCategoryPage(page, size, item);

        model.addAttribute("categories", categoryDTOPage);
        model.addAttribute("newCategory", new CategoryCreateDTO());

        return "categoryPage/index";
    }

    // SAVE NEW CATEGORY
    @PostMapping("/add")
    public String saveCategory(@Valid @ModelAttribute("newCategory") CategoryCreateDTO newCategory, BindingResult bindingResult) {
        if(bindingResult.hasErrors()){
            return "categoryPage/index";
        } else {
            categoryService.createNewCategory(newCategory);
            return "redirect:/categories";
        }
    }

}