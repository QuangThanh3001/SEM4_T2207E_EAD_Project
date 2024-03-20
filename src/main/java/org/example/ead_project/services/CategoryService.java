package org.example.ead_project.services;

import lombok.RequiredArgsConstructor;
import org.example.ead_project.Repository.CategoryRepository;
import org.example.ead_project.models.Category;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;
    public List<Category> getAllCategory(){
        return  categoryRepository.findAll();
    }
    public Optional<Category> getCategoryId(Integer id) {
        return categoryRepository.findById(id);
    }

    public void addCategory (Category category) {
        categoryRepository.save(category);
    }
    public void updateCategory(Integer id, Category updateCategory) {
        Optional<Category> updateOptional = categoryRepository.findById(id);
        if (updateOptional.isPresent()) {
            Category editCategory = updateOptional.get();
            editCategory.setName(updateCategory.getName()); // Ánh xạ dữ liệu từ updateCategory vào editCategory bằng cách sử dụng setter
            categoryRepository.save(editCategory);
        }
    }
    public void deleteCategoryId(Integer id){
        categoryRepository.deleteById(id);
    }
}
