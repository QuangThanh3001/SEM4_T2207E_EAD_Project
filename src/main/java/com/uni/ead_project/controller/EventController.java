package com.uni.ead_project.controller;

import com.uni.ead_project.entity.EventsEntity;
import com.uni.ead_project.service.EventService;
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
@RequestMapping("/event")
public class EventController {
   private final EventService eventService;

   public EventController(EventService eventService) {
      this.eventService = eventService;
   }
   @InitBinder
   public void initBinder(WebDataBinder dataBinder) {
      StringTrimmerEditor stringTrimmerEditor = new StringTrimmerEditor(true);
      dataBinder.registerCustomEditor(String.class,stringTrimmerEditor);
   }
   @GetMapping("/list")
   public String GetEvent(Model model){
      List<EventsEntity> event=eventService.getAllEvent();
      model.addAttribute("event", event);
      return "event/list";
   }
   @GetMapping("/formAdd")
   public String ShowFormAdd(Model model) {
      EventsEntity events = new EventsEntity();
      model.addAttribute("event",events);
      return "event/form";
   }
   @PostMapping("/save")
   public String saveEvent(@Valid @ModelAttribute("event") EventsEntity events, BindingResult bindingResult){
      if (bindingResult.hasErrors()) {
         return "event/form";
      }
      else {
         eventService.saveEvent(events);
         return "redirect:/user/list";
      }
   }
   @GetMapping("formUpdate")
   public String ShowFormUpdate(@RequestParam("eventId") String eventId, Model model){
      Optional<EventsEntity> events = eventService.getEventById(eventId);
      model.addAttribute("event", events);
      return "event/form";
   }
   @GetMapping("delete")
   public String DeleteEvent(@RequestParam("eventId") String eventId, Model model){
     eventService.deleteEvent(eventId);
      return "redirect:/event/list";
   }
}