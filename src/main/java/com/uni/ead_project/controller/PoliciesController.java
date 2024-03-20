package com.uni.ead_project.controller;

import com.uni.ead_project.entity.PoliciesEntity;
import com.uni.ead_project.service.PoliciesService;
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
@RequestMapping("/policie")
public class PoliciesController {
     private final PoliciesService policiesService;

    public PoliciesController(PoliciesService policiesService) {
        this.policiesService = policiesService;
    }

    @InitBinder
    public void initBinder(WebDataBinder dataBinder) {
        StringTrimmerEditor stringTrimmerEditor = new StringTrimmerEditor(true);
        dataBinder.registerCustomEditor(String.class,stringTrimmerEditor);
    }
    @GetMapping("/list")
    public String GetPolicie(Model model){
        List<PoliciesEntity> policie=policiesService.getAllPolicies();
        model.addAttribute("policie", policie);
        return "policie/list";
    }
    @GetMapping("/formAdd")
    public String ShowFormAdd(Model model) {
        PoliciesEntity policies = new PoliciesEntity();
        model.addAttribute("policie",policies);
        return "policie/form";
    }
    @PostMapping("/save")
    public String savePolicie(@Valid @ModelAttribute("policie") PoliciesEntity policies, BindingResult bindingResult){
        if (bindingResult.hasErrors()) {
            return "policie/form";
        }
        else {
            policiesService.saveserviceId(policies);
            return "policie:/user/list";
        }
    }
    @GetMapping("formUpdate")
    public String ShowFormUpdate(@RequestParam("serviceId") String serviceId, Model model){
        Optional<PoliciesEntity> policies = policiesService.getAllPoliciesById(serviceId);
        model.addAttribute("policie", policies);
        return "policie/form";
    }
    @GetMapping("delete")
    public String DeletePolicie(@RequestParam("serviceId") String serviceId, Model model){
        policiesService.deleteserviceId(serviceId);
        return "redirect:/policie/list";
    }
}
