package org.example.ead_project.services;

import lombok.RequiredArgsConstructor;
import org.example.ead_project.Repository.ProductRepository;
import org.example.ead_project.models.Category;
import org.example.ead_project.models.Product;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;
    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Integer id) {

        return productRepository.findById(id);
    }
    public void addProduct (Product product) {
        productRepository.save(product);
    }

}
