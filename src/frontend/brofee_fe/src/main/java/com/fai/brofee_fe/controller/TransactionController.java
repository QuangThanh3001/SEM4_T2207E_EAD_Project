package com.fai.brofee_fe.controller;

import com.fai.brofee_fe.dto.TransactionCreateNewCustomerDTO;
import com.fai.brofee_fe.dto.TransactionCreateOldCustomerDTO;
import com.fai.brofee_fe.service.TransactionService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/transaction")
@AllArgsConstructor
public class TransactionController {

    private final TransactionService transactionService;

    @PostMapping("/new-customer")
    public String createTransaction(
            @ModelAttribute("transaction") @Valid TransactionCreateNewCustomerDTO transaction,
            BindingResult bindingResult,
            Model model
    ) {
        if (bindingResult.hasErrors()) {
            return "index";
        }

        try {
            transactionService.createTransactionForNewCustomer(transaction);
        } catch (Exception e) {
            model.addAttribute("message", e.getMessage());
            return "index";
        }

        return "redirect:/";
    }

    @PostMapping("/old-customer")
    public String createTransactionForOldCustomer(
            @ModelAttribute("transaction") @Valid TransactionCreateOldCustomerDTO transaction,
            BindingResult bindingResult,
            Model model
    ) {
        if (bindingResult.hasErrors()) {
            return "index";
        }

        try {
            transactionService.createTransactionForOldCustomer(transaction);
        } catch (Exception e) {
            model.addAttribute("message", e.getMessage());
            return "index";
        }

        return "redirect:/";
    }
}
