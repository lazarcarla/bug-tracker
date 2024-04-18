package com.example.bugtracker.service;

import com.example.bugtracker.dao.dto.LoginDto;
import com.example.bugtracker.dao.dto.UserDto;
import com.example.bugtracker.dao.mapper.UserMapper;
import com.example.bugtracker.dao.model.User;
import com.example.bugtracker.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public List<UserDto> getAllUsers(){
        List<User> users = (List<User>) this.userRepository.findAll();
        return UserMapper.mapToDtoList(users);
    }

    public UserDto loginUser(LoginDto loginDto){
        User user = this.userRepository.findByUsernameAndPasswordAndRole(loginDto.username(), loginDto.password(), loginDto.role()).orElseThrow();

        return UserMapper.mapToDto(user);
    }
}
