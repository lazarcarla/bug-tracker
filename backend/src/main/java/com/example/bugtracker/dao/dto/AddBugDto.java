package com.example.bugtracker.dao.dto;

import lombok.Builder;

@Builder
public record AddBugDto(
        String title,
        String description,
        String date,
        String urgency
) {
}
