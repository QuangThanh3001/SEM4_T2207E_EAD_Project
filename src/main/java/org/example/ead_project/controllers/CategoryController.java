package org.example.ead_project.controllers;

import lombok.RequiredArgsConstructor;
import org.example.ead_project.models.Category;
import org.example.ead_project.services.CategoryService;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;
    @GetMapping("/category")
    public String getCategory(Model model) {
        List<Category> categories = categoryService.getAllCategory();
        model.addAttribute("categories" , categories);
        return "admin/categories/listCategory";
    }
    @GetMapping("/addCategory")
    public String getAddCategory(Model model) {
        model.addAttribute("category", new Category());
        return "admin/categories/addCategory";
    }

    @PostMapping("/addCategories")
    public String addCategories (@ModelAttribute("category") Category category) {
        categoryService.addCategory(category);
        return "redirect:/category";
    }

    @GetMapping("/editCategory/{id}")
    public String editCategory(@PathVariable Integer id , Model model) {
        Optional<Category> category = categoryService.getCategoryId(id);
        if (category.isPresent()) {
            model.addAttribute("category", category.get());
            return "admin/categories/editCategory";
        }else {
            return "redirect:/";
        }
    }
    @PostMapping("/categories/{id}")
    public String updateCategory(@PathVariable("id") Integer id, @ModelAttribute("updateCategory") Category updateCategory) {
        categoryService.updateCategory(id, updateCategory);
        return "redirect:/category";
    }
    @GetMapping("/delete/{id}")
    public String deleteCategory(@PathVariable Integer id, RedirectAttributes redirectAttributes) {
        try {
            categoryService.deleteCategoryId(id);
            redirectAttributes.addFlashAttribute("successMessage", "Category has been deleted successfully.");
        }catch (DataIntegrityViolationException e) {
            redirectAttributes.addFlashAttribute("errorMessage", "Unable to delete. Category is in use.");
        }
        return "redirect:/category";
    }
}
