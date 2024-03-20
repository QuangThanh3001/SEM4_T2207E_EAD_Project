package com.uni.ead_project.controller;

import com.uni.ead_project.entity.CouponsEntity;
import com.uni.ead_project.entity.SysdiagramsEntity;
import com.uni.ead_project.service.SysdiagramsService;
import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/didigram")
public class SysdiagramsController {
    private final SysdiagramsService didigramservice;

    public SysdiagramsController(SysdiagramsService didigramservice) {
        this.didigramservice = didigramservice;
    }
    @InitBinder
    public void initBinder(WebDataBinder dataBinder) {
        StringTrimmerEditor stringTrimmerEditor = new StringTrimmerEditor(true);
        dataBinder.registerCustomEditor(String.class,stringTrimmerEditor);
    }
    @GetMapping("/list")
    public String GetDidigram(Model model){
        List<SysdiagramsEntity> didigram= didigramservice.getAllSysdiagrams();
        model.addAttribute("didigram", didigram);
        return "didigram/list";
    }

}
