package com.fai.brofee_fe.controller;

import com.fai.brofee_fe.service.CategoryService_hung;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class HomeController {

    private final CategoryService_hung categoryService_hung;

    @GetMapping("/")
    public String homePage(Model model) {
        model.addAttribute("categories", categoryService_hung.getAllCategoriesWithDetail());
        return "index";
    }

}
