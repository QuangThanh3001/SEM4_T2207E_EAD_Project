package com.uni.ead_project.service;

import com.uni.ead_project.entity.EventsEntity;
import com.uni.ead_project.repository.EventsRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService implements IEventService{
    private final EventsRepository eventsRepository;

    public EventService(EventsRepository eventsRepository) {
        this.eventsRepository = eventsRepository;
    }

    @Override
    public List<EventsEntity> getAllEvent() {
        return eventsRepository.findAll();
    }

    @Override
    public Optional<EventsEntity> getEventById(String eventId) {
        return eventsRepository.findById(eventId);
    }

    @Override
    public void saveEvent(EventsEntity eventsEntity) {
        eventsRepository.save(eventsEntity);
    }

    @Override
    public void deleteEvent(String eventId) {
        eventsRepository.deleteById(eventId);
    }
}
