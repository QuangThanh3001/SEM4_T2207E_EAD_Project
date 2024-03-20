package com.uni.ead_project.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "Services", schema = "dbo", catalog = "lab")
public class ServicesEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ServiceID")
    private String serviceId;
    @Basic
    @Column(name = "ServiceName")
    private String serviceName;
    @Basic
    @Column(name = "Description")
    private String description;
    @Basic
    @Column(name = "ServiceType")
    private String serviceType;
    @Basic
    @Column(name = "Price")
    private BigDecimal price;
    @OneToMany(mappedBy = "servicesByServiceId")
    private Collection<EventsEntity> eventsByServiceId;
    @OneToOne(mappedBy = "servicesByServiceId")
    private PoliciesEntity policiesByServiceId;

    public String getServiceId() {
        return serviceId;
    }

    public void setServiceId(String serviceId) {
        this.serviceId = serviceId;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getServiceType() {
        return serviceType;
    }

    public void setServiceType(String serviceType) {
        this.serviceType = serviceType;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ServicesEntity that = (ServicesEntity) o;
        return Objects.equals(serviceId, that.serviceId) && Objects.equals(serviceName, that.serviceName) && Objects.equals(description, that.description) && Objects.equals(serviceType, that.serviceType) && Objects.equals(price, that.price);
    }

    @Override
    public int hashCode() {
        return Objects.hash(serviceId, serviceName, description, serviceType, price);
    }

    public Collection<EventsEntity> getEventsByServiceId() {
        return eventsByServiceId;
    }

    public void setEventsByServiceId(Collection<EventsEntity> eventsByServiceId) {
        this.eventsByServiceId = eventsByServiceId;
    }

    public PoliciesEntity getPoliciesByServiceId() {
        return policiesByServiceId;
    }

    public void setPoliciesByServiceId(PoliciesEntity policiesByServiceId) {
        this.policiesByServiceId = policiesByServiceId;
    }
}
