package com.uni.ead_project.entity;

import jakarta.persistence.*;

import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "Policies", schema = "dbo", catalog = "lab")
public class PoliciesEntity {
    @Basic
    @Column(name = "StartDateTime")
    private Date startDateTime;
    @Basic
    @Column(name = "EndDateTime")
    private Date endDateTime;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ServiceID")
    private String serviceId;
    @Basic
    @Column(name = "PolicyFormula")
    private String policyFormula;
    @Basic
    @Column(name = "FacilityApply")
    private String facilityApply;
    @Basic
    @Column(name = "Status")
    private Byte status;
    @OneToOne
    @JoinColumn(name = "ServiceID", referencedColumnName = "ServiceID", nullable = false)
    private ServicesEntity servicesByServiceId;

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

    public String getServiceId() {
        return serviceId;
    }

    public void setServiceId(String serviceId) {
        this.serviceId = serviceId;
    }

    public String getPolicyFormula() {
        return policyFormula;
    }

    public void setPolicyFormula(String policyFormula) {
        this.policyFormula = policyFormula;
    }

    public String getFacilityApply() {
        return facilityApply;
    }

    public void setFacilityApply(String facilityApply) {
        this.facilityApply = facilityApply;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PoliciesEntity that = (PoliciesEntity) o;
        return Objects.equals(startDateTime, that.startDateTime) && Objects.equals(endDateTime, that.endDateTime) && Objects.equals(serviceId, that.serviceId) && Objects.equals(policyFormula, that.policyFormula) && Objects.equals(facilityApply, that.facilityApply) && Objects.equals(status, that.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(startDateTime, endDateTime, serviceId, policyFormula, facilityApply, status);
    }

    public ServicesEntity getServicesByServiceId() {
        return servicesByServiceId;
    }

    public void setServicesByServiceId(ServicesEntity servicesByServiceId) {
        this.servicesByServiceId = servicesByServiceId;
    }
}
