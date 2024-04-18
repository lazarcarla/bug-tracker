package com.example.bugtracker.controller;

import com.example.bugtracker.dao.dto.LoginDto;
import com.example.bugtracker.dao.dto.UserDto;
import com.example.bugtracker.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping
    private List<UserDto> getAllUsers() {
        return this.userService.getAllUsers();
    }

    @PostMapping("/login")
    public UserDto loginUser(@RequestBody LoginDto loginDto){
        return this.userService.loginUser(loginDto);
    }

}
