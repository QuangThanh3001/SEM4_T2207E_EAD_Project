package com.uni.ead_project.controller;

import com.uni.ead_project.entity.UsersEntity;
import com.uni.ead_project.service.UserService;
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
@RequestMapping("/User")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
    @InitBinder
    public void initBinder(WebDataBinder dataBinder) {
        StringTrimmerEditor stringTrimmerEditor = new StringTrimmerEditor(true);
        dataBinder.registerCustomEditor(String.class,stringTrimmerEditor);
    }
    @GetMapping("/list")
    public String GetUsers(Model model){
        List<UsersEntity>users=userService.getAllUsers();
        model.addAttribute("users", users);
        return "user/list";
    }
    @GetMapping("/formAdd")
    public String ShowFormAdd(Model model) {
        UsersEntity user = new UsersEntity();
        model.addAttribute("user",user);
        return "user/form";
    }
    @PostMapping("/save")
    public String saveUser(@Valid @ModelAttribute("user") UsersEntity users,  BindingResult bindingResult){
        if (bindingResult.hasErrors()) {
            return "user/form";
        }
        else {
            userService.saveFormUser(users);
            return "redirect:/user/list";
        }
    }
    @GetMapping("formUpdate")
    public String ShowFormUpdate(@RequestParam("userId") String userId, Model model){
        Optional<UsersEntity> users = userService.getUserById(userId);
        model.addAttribute("users", users);
        return "user/form";
    }
    @GetMapping("delete")
    public String DeleteUser(@RequestParam("userId") String userId, Model model){
        userService.deleteUser(userId);
        return "redirect:/user/list";
    }
}
