package com.uni.ead_project.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "Events", schema = "dbo", catalog = "lab")
public class EventsEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "EventID")
    private String eventId;
    @Basic
    @Column(name = "EventName")
    private String eventName;
    @Basic
    @Column(name = "StartDateTime")
    private Date startDateTime;
    @Basic
    @Column(name = "EndDateTime")
    private Date endDateTime;
    @Basic
    @Column(name = "ShortDescription")
    private String shortDescription;
    @Basic
    @Column(name = "Value")
    private BigDecimal value;
    @Basic
    @Column(name = "ScopeApply")
    private String scopeApply;
    @Basic
    @Column(name = "BannerImage")
    private String bannerImage;
    @Basic
    @Column(name = "EventStatus")
    private Boolean eventStatus;
    @Basic
    @Column(name = "ServiceID")
    private String serviceId;
    @ManyToOne
    @JoinColumn(name = "ServiceID", referencedColumnName = "ServiceID")
    private ServicesEntity servicesByServiceId;
    @OneToMany(mappedBy = "eventsByEventId")
    private Collection<PartnersEntity> partnersByEventId;

    public String getEventId() {
        return eventId;
    }

    public void setEventId(String eventId) {
        this.eventId = eventId;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public Date getStartDateTime() {
        return startDateTime;
    }

    public void setStartDateTime(Date startDateTime) {
        this.startDateTime = startDateTime;
    }

    public Date getEndDateTime() {
        return endDateTime;
    }

    public void setEndDateTime(Date endDateTime) {
        this.endDateTime = endDateTime;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public BigDecimal getValue() {
        return value;
    }

    public void setValue(BigDecimal value) {
        this.value = value;
    }

    public String getScopeApply() {
        return scopeApply;
    }

    public void setScopeApply(String scopeApply) {
        this.scopeApply = scopeApply;
    }

    public String getBannerImage() {
        return bannerImage;
    }

    public void setBannerImage(String bannerImage) {
        this.bannerImage = bannerImage;
    }

    public Boolean getEventStatus() {
        return eventStatus;
    }

    public void setEventStatus(Boolean eventStatus) {
        this.eventStatus = eventStatus;
    }

    public String getServiceId() {
        return serviceId;
    }

    public void setServiceId(String serviceId) {
        this.serviceId = serviceId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EventsEntity that = (EventsEntity) o;
        return Objects.equals(eventId, that.eventId) && Objects.equals(eventName, that.eventName) && Objects.equals(startDateTime, that.startDateTime) && Objects.equals(endDateTime, that.endDateTime) && Objects.equals(shortDescription, that.shortDescription) && Objects.equals(value, that.value) && Objects.equals(scopeApply, that.scopeApply) && Objects.equals(bannerImage, that.bannerImage) && Objects.equals(eventStatus, that.eventStatus) && Objects.equals(serviceId, that.serviceId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(eventId, eventName, startDateTime, endDateTime, shortDescription, value, scopeApply, bannerImage, eventStatus, serviceId);
    }

    public ServicesEntity getServicesByServiceId() {
        return servicesByServiceId;
    }

    public void setServicesByServiceId(ServicesEntity servicesByServiceId) {
        this.servicesByServiceId = servicesByServiceId;
    }

    public Collection<PartnersEntity> getPartnersByEventId() {
        return partnersByEventId;
    }

    public void setPartnersByEventId(Collection<PartnersEntity> partnersByEventId) {
        this.partnersByEventId = partnersByEventId;
    }
}
