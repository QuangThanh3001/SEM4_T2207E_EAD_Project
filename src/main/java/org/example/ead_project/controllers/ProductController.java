package org.example.ead_project.controllers;

import lombok.RequiredArgsConstructor;
import org.example.ead_project.models.Category;
import org.example.ead_project.models.Product;
import org.example.ead_project.services.CategoryService;
import org.example.ead_project.services.ProductService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;
    private final CategoryService categoryService;
    @GetMapping("/product")
    public String getProduct() {

        return "admin/product/listProduct";
    }
    @GetMapping("/addProduct")
    public String getAddProduct(Model model) {
        List<Category> categories = categoryService.getAllCategory();
        model.addAttribute("categories",categories);
        model.addAttribute("product", new Product());
        return "admin/product/addProduct";
    }

    @PostMapping("/addProducts")
    public String addCategories (@ModelAttribute("products") Product product) {
        productService.addProduct(product);
        return "redirect:/product";
    }
}
