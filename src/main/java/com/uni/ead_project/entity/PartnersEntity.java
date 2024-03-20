package com.uni.ead_project.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "Partners", schema = "dbo", catalog = "lab")
public class PartnersEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "UserID")
    private String userId;
    @Basic
    @Column(name = "PhoneNumber")
    private String phoneNumber;
    @Basic
    @Column(name = "Email")
    private String email;
    @Basic
    @Column(name = "UserQR")
    private String userQr;
    @Basic
    @Column(name = "InviterID")
    private String inviterId;
    @Basic
    @Column(name = "InviterPhoneNumber")
    private String inviterPhoneNumber;
    @Basic
    @Column(name = "InviterEmail")
    private String inviterEmail;
    @Basic
    @Column(name = "EventID")
    private String eventId;
    @OneToOne
    @JoinColumn(name = "UserID", referencedColumnName = "UserID", nullable = false)
    private UsersEntity usersByUserId;
    @ManyToOne
    @JoinColumn(name = "InviterID", referencedColumnName = "UserID")
    private UsersEntity usersByInviterId;
    @ManyToOne
    @JoinColumn(name = "EventID", referencedColumnName = "EventID")
    private EventsEntity eventsByEventId;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserQr() {
        return userQr;
    }

    public void setUserQr(String userQr) {
        this.userQr = userQr;
    }

    public String getInviterId() {
        return inviterId;
    }

    public void setInviterId(String inviterId) {
        this.inviterId = inviterId;
    }

    public String getInviterPhoneNumber() {
        return inviterPhoneNumber;
    }

    public void setInviterPhoneNumber(String inviterPhoneNumber) {
        this.inviterPhoneNumber = inviterPhoneNumber;
    }

    public String getInviterEmail() {
        return inviterEmail;
    }

    public void setInviterEmail(String inviterEmail) {
        this.inviterEmail = inviterEmail;
    }

    public String getEventId() {
        return eventId;
    }

    public void setEventId(String eventId) {
        this.eventId = eventId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PartnersEntity that = (PartnersEntity) o;
        return Objects.equals(userId, that.userId) && Objects.equals(phoneNumber, that.phoneNumber) && Objects.equals(email, that.email) && Objects.equals(userQr, that.userQr) && Objects.equals(inviterId, that.inviterId) && Objects.equals(inviterPhoneNumber, that.inviterPhoneNumber) && Objects.equals(inviterEmail, that.inviterEmail) && Objects.equals(eventId, that.eventId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, phoneNumber, email, userQr, inviterId, inviterPhoneNumber, inviterEmail, eventId);
    }

    public UsersEntity getUsersByUserId() {
        return usersByUserId;
    }

    public void setUsersByUserId(UsersEntity usersByUserId) {
        this.usersByUserId = usersByUserId;
    }

    public UsersEntity getUsersByInviterId() {
        return usersByInviterId;
    }

    public void setUsersByInviterId(UsersEntity usersByInviterId) {
        this.usersByInviterId = usersByInviterId;
    }

    public EventsEntity getEventsByEventId() {
        return eventsByEventId;
    }

    public void setEventsByEventId(EventsEntity eventsByEventId) {
        this.eventsByEventId = eventsByEventId;
    }
}
