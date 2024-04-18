package com.example.bugtracker.dao.dto;

public record LoginDto(
        String username,
        String password,
        String role
) { }
