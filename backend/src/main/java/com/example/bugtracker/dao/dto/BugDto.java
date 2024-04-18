package com.example.bugtracker.dao.dto;

import lombok.Builder;

@Builder
public record BugDto(
        Long id,
        String title,
        String description,
        String date,
        String urgency
) {
}
