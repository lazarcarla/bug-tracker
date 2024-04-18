package com.example.bugtracker.dao.dto;

import lombok.Builder;

@Builder
public record UserDto(
        Long id,
        String username,
        String password,
        String role
) {

}
