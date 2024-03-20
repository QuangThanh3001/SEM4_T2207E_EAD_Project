package org.example.ead_project.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/dashboard")
public class DashboardsController {
    @GetMapping("")
    public String getDashboard() {
        return "admin/dashboards-analytics";
    }
}
