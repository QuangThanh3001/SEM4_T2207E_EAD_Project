package com.uni.ead_project.service;

import com.uni.ead_project.entity.EventsEntity;

import java.util.List;
import java.util.Optional;

public interface IEventService {
    List<EventsEntity> getAllEvent();
    Optional<EventsEntity> getEventById(String eventId);
    void saveEvent(EventsEntity eventsEntity);
    void deleteEvent(String eventId);
}
