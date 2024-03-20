package com.uni.ead_project.controller;

import com.uni.ead_project.entity.EventsEntity;
import com.uni.ead_project.entity.PartnersEntity;
import com.uni.ead_project.service.PartnersService;
import jakarta.validation.Valid;
import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/partners")
public class PartnersController {
    private final PartnersService partnersService;

    public PartnersController(PartnersService partnersService) {
        this.partnersService = partnersService;
    }
    @InitBinder
    public void initBinder(WebDataBinder dataBinder) {
        StringTrimmerEditor stringTrimmerEditor = new StringTrimmerEditor(true);
        dataBinder.registerCustomEditor(String.class,stringTrimmerEditor);
    }
    @GetMapping("/list")
    public String GetPartner(Model model){
        List<PartnersEntity> partner=partnersService.getAllPartner();
        model.addAttribute("partner", partner);
        return "partner/list";
    }
    @GetMapping("/formAdd")
    public String ShowFormAdd(Model model) {
        PartnersEntity partners = new PartnersEntity();
        model.addAttribute("oartner",partners);
        return "partner/form";
    }
    @PostMapping("/save")
    public String savePartner(@Valid @ModelAttribute("partner") PartnersEntity partners, BindingResult bindingResult){
        if (bindingResult.hasErrors()) {
            return "partner/form";
        }
        else {
            partnersService.savePartner(partners);
            return "redirect:/partner/list";
        }
    }
    @GetMapping("formUpdate")
    public String ShowFormUpdate(@RequestParam("userId") String userId, Model model){
        Optional<PartnersEntity> partners = partnersService.getAllPartnerById(userId);
        model.addAttribute("partner", partners);
        return "partner/form";
    }
    @GetMapping("delete")
    public String DeletePartner(@RequestParam("userId") String userId, Model model){
        partnersService.deletePartner(userId);
        return "redirect:/partner/list";
    }
}
