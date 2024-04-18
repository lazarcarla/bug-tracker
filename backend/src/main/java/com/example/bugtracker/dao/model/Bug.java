package com.example.bugtracker.dao.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name="bugs")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Bug implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long bugId;
    @Column(name="title", nullable = false)
    private String title;
    @Column(name="description", nullable = false)
    private String description;
    @Column(name="date_created", nullable = false)
    private LocalDate date;
    @Column(name="urgency", nullable = false)
    private String urgency;


}
